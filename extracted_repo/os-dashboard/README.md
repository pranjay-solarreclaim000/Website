# OS Dashboard Usage Guide

This dashboard serves as the Visual Control Plane for the SolarReclaim Agenting OS, providing a real-time view of the system topology, agent status, and skill registry.

## 🚀 Quick Start

### 1. Installation
Ensure you are in the `os-dashboard` directory and install the required dependencies:
```bash
cd os-dashboard
npm install
```

### 2. Launching the Server
Start the Node.js server to begin hosting the control plane:
```bash
node server.js
```
The server will start on `http://localhost:3000` by default.

### 3. Accessing the Dashboard
Open your preferred web browser and navigate to:
[http://localhost:3000](http://localhost:3000)

## 🛠️ Features
- **Topology Map**: Visualizes the current state of the OS and highlights active nodes.
- **Agent Matrix**: Shows the current active agent and system-wide agent status.
- **Skill Registry**: Lists all available modular SOPs within the `/skills` directory.
- **Invoke System**: Trigger specific skills and goals directly from the UI, which updates the Unified Memory (`universal-state.json` and `os-state.md`).

## 📁 System Integration
The dashboard interacts with the following core files:
- `vault/memory/universal-state.json`: The primary source of truth for system state.
- `vault/memory/os-state.md`: The human-readable chronological log of OS events.
- `skills/`: The directory containing all executable skills.
