const STATES = ['IDLE', 'RESEARCH', 'PLANNING', 'IMPLEMENTATION', 'QUALITY_REVIEW'];
const TRANSITIONS = [
    { from: 'IDLE', to: 'RESEARCH' },
    { from: 'RESEARCH', to: 'PLANNING' },
    { from: 'PLANNING', to: 'IMPLEMENTATION' },
    { from: 'IMPLEMENTATION', to: 'QUALITY_REVIEW' },
    { from: 'QUALITY_REVIEW', to: 'IDLE' },
    { from: 'QUALITY_REVIEW', to: 'IMPLEMENTATION' },
];

async function refreshDashboard() {
    try {
        const [stateRes, skillsRes] = await Promise.all([
            fetch('/api/state'),
            fetch('/api/skills')
        ]);
        const stateData = await stateRes.json();
        const skillsData = await skillsRes.json();

        updateTopology(stateData);
        updateAgentMatrix(stateData);
        updateSkillRegistry(skillsData);
    } catch (e) {
        console.error('Error refreshing dashboard:', e);
    }
}

function updateAgentMatrix(data) {
    try {
        // Active Agent from state machine with null checks
        const activeAgent = data?.state_machine?.current_state || 'UNKNOWN';
        document.getElementById('active-agent').textContent = activeAgent;

        // Heartbeat and Last Updated
        const lastUpdated = data?.last_updated || 'Unknown';
        document.getElementById('last-updated').textContent = lastUpdated;
        const heartbeat = document.getElementById('heartbeat');
        if (heartbeat) {
            heartbeat.classList.toggle('pulse', true);
        }

        // Task Binding
        const tasks = data?.pending_tasks || [];
        const taskBinding = document.getElementById('task-binding');
        if (taskBinding) {
            if (tasks.length === 0) {
                taskBinding.innerHTML = 'No pending tasks';
            } else {
                taskBinding.innerHTML = tasks.map(task => `<<divdiv class="task-item">${task}</div>`).join('');
            }
        }
    } catch (e) {
        console.error('Error updating Agent Matrix:', e);
    }
}

function updateSkillRegistry(data) {
    try {
        const list = document.getElementById('registry-list');
        if (!list) return;

        const skills = data?.skills || [];

        // Avoid DOM churn: only update if the number of skills changed
        if (list.children.length === skills.length) return;

        list.innerHTML = '';
        skills.forEach(skill => {
            const li = document.createElement('li');
            li.className = 'registry-item';
            li.innerHTML = `
                <<spanspan class="skill-name">${skill}</span>
                <<buttonbutton class="invoke-btn" onclick="invokeSkill('${skill}')">Invoke</button>
            `;
            list.appendChild(li);
        });
    } catch (e) {
        console.error('Error updating Skill Registry:', e);
    }
}

async function invokeSkill(skill) {
    const goal = prompt(`Enter goal for ${skill}:`, 'Execute standard process');
    if (!goal) return;

    try {
        const res = await fetch('/api/trigger', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ skill, goal })
        });
        if (res.ok) {
            alert(`Skill ${skill} invoked successfully!`);
            refreshDashboard();
        } else {
            const data = await res.json();
            alert(`Error: ${data.error}`);
        }
    } catch (e) {
        alert('Network error occurred.');
    }
}

function updateTopology(stateData) {
    const currentState = stateData?.state_machine?.current_state || 'IDLE';
    const sessionGraph = stateData?.session_graph || [];

    const completedStates = new Set();
    sessionGraph.forEach(entry => {
        if (entry.event === 'EVENT_RESEARCH_COMPLETE') completedStates.add('RESEARCH');
        if (entry.event === 'EVENT_PLAN_APPROVED') completedStates.add('PLANNING');
        if (entry.event === 'EVENT_IMPL_COMPLETE') completedStates.add('IMPLEMENTATION');
        if (entry.event === 'EVENT_GATE_PASSED') completedStates.add('QUALITY_REVIEW');
    });

    renderGraph(currentState, completedStates, stateData);
}

function renderGraph(activeState, completedStates, fullStateData) {
    const svg = document.getElementById('topology-svg');
    if (!svg) return;

    const width = 800;
    const height = 400;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 150;

    const nodePositions = {};
    STATES.forEach((state, i) => {
        const angle = (i / STATES.length) * 2 * Math.PI;
        nodePositions[state] = {
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle)
        };
    });

    let html = `<<defsdefs>
        <<markermarker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <<polygonpolygon points="0 0, 10 3.5, 0 7" fill="#333" />
        </marker>
    </defs>`;

    // Draw Edges
    TRANSITIONS.forEach(trans => {
        const start = nodePositions[trans.from];
        const end = nodePositions[trans.to];
        const isActive = (trans.from === activeState);
        html += `<<lineline x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}"
                 class="edge ${isActive ? 'active' : ''}" />`;
    });

    // Draw Nodes
    STATES.forEach(state => {
        const pos = nodePositions[state];
        const isActive = (state === activeState);
        const isCompleted = completedStates.has(state);
        html += `
            <<gg class="node ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}"
               onclick="showTrace('${state}')">
                <<circlecircle cx="${pos.x}" cy="${pos.y}" r="40" />
                <<texttext x="${pos.x}" y="${pos.y + 5}">${state}</text>
            </g>`;
    });

    svg.innerHTML = html;
}

function showTrace(state) {
    const panel = document.getElementById('trace-panel');
    const title = document.getElementById('trace-title');
    const details = document.getElementById('trace-details');

    panel.classList.add('open');
    title.textContent = `State: ${state}`;

    fetch('/api/state').then(res => res.json()).then(data => {
        const relatedEvents = data.session_graph.filter(e =>
            e.event.includes(state) ||
            (state === 'IDLE' && e.event === 'EVENT_GATE_PASSED')
        );

        if (relatedEvents.length === 0) {
            details.innerHTML = '<<pp>No recorded traces for this state in current session.</p>';
            return;
        }

        details.innerHTML = relatedEvents.map(e => `
            <<divdiv class="trace-detail">
                <<spanspan class="trace-label">Timestamp</span>
                <<spanspan class="trace-value">${e.timestamp}</span>
                <<spanspan class="trace-label">Event</span>
                <<spanspan class="trace-value">${e.event}</span>
                <<spanspan class="trace-label">Details</span>
                <<spanspan class="trace-value">${e.description}</span>
            </div>
        `).join('');
    });
}

function closeTrace() {
    document.getElementById('trace-panel').classList.remove('open');
}

// Initial load and periodic update
refreshDashboard();
setInterval(refreshDashboard, 5000);
