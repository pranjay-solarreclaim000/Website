const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const STATE_FILE = path.join(__dirname, '..', 'vault', 'memory', 'universal-state.json');
const HISTORY_FILE = path.join(__dirname, '..', 'vault', 'memory', 'os-state.md');
const SKILLS_DIR = path.join(__dirname, '..', 'skills');

// Helper for safe JSON parsing
function safeParseJSON(data) {
    try {
        return JSON.parse(data);
    } catch (e) {
        console.error('JSON parse error:', e);
        return null;
    }
}

// GET /api/state: Returns content of universal-state.json
app.get('/api/state', async (req, res) => {
    try {
        const data = await fs.readFile(STATE_FILE, 'utf8');
        const parsed = safeParseJSON(data);
        if (parsed === null) {
            return res.status(500).json({ error: 'Malformed state JSON' });
        }
        res.json(parsed);
    } catch (error) {
        res.status(500).json({ error: 'Could not read state file' });
    }
});

// GET /api/history: Returns content of os-state.md
app.get('/api/history', async (req, res) => {
    try {
        const data = await fs.readFile(HISTORY_FILE, 'utf8');
        res.send(data);
    } catch (error) {
        res.status(500).send('Could not read history file');
    }
});

// GET /api/skills: Returns a list of files in the skills directory
app.get('/api/skills', async (req, res) => {
    try {
        const files = await fs.readdir(SKILLS_DIR);
        res.json({ skills: files.filter(f => f.endsWith('.md')) });
    } catch (error) {
        res.status(500).json({ error: 'Could not read skills directory' });
    }
});

// POST /api/trigger: Updates state and history with a new request
app.post('/api/trigger', async (req, res) => {
    let { skill, goal } = req.body;

    if (!skill || !goal) {
        return res.status(400).json({ error: 'Missing skill or goal' });
    }

    // Basic Input Sanitization: Prevent path traversal/injection if used in filenames/paths
    // Removing non-alphanumeric characters except hyphens and underscores for the skill name
    skill = skill.replace(/[^a-z0-9\-_]/gi, '');
    // Simple trimming for goal
    goal = goal.trim();

    if (!skill || !goal) {
        return res.status(400).json({ error: 'Invalid skill or goal format' });
    }

    try {
        // 1. Update universal-state.json
        const stateRaw = await fs.readFile(STATE_FILE, 'utf8');
        let stateData = safeParseJSON(stateRaw);

        if (stateData === null) {
            return res.status(500).json({ error: 'Malformed state file on server' });
        }

        if (!stateData.founder_requests) {
            stateData.founder_requests = [];
        }

        const requestId = Date.now();
        stateData.founder_requests.push({
            id: requestId,
            skill,
            goal,
            timestamp: new Date().toISOString(),
            status: 'pending'
        });

        await fs.writeFile(STATE_FILE, JSON.stringify(stateData, null, 2));

        // 2. Append to os-state.md
        const logEntry = `\n## Trigger Request [${new Date().toISOString()}]\n- Skill: ${skill}\n- Goal: ${goal}\n- Status: Pending\n---\n`;
        await fs.appendFile(HISTORY_FILE, logEntry);

        res.json({ message: 'Trigger processed successfully', requestId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error processing trigger' });
    }
});

app.listen(PORT, () => {
    console.log(`OS Dashboard Server running on http://localhost:${PORT}`);
});
