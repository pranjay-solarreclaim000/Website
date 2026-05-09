# Skill: Cold Boot Protocol (`os-boot`)

## Purpose
The Cold Boot Protocol is the system initialization sequence designed to rehydrate the agent's state from persistent memory, preventing context rot and ensuring a seamless transition between sessions.

## Operational Instructions
When executing a Cold Boot, the agent must perform the following steps in order:

1. **Pre-flight Check**: Verify that `C:\Users\pranj\SolarReclaim\vault\memory\universal-state.json` and `C:\Users\pranj\SolarReclaim\vault\memory\os-state.md` exist on disk. If either is missing, initiate the "Error Handling" sequence.
2. **Read Global State**: Load and parse `C:\Users\pranj\SolarReclaim\vault\memory\universal-state.json` to retrieve the current global environment variables and system flags.
3. **Audit Recent History**: Read the last 5 entries of `C:\Users\pranj\SolarReclaim\vault\memory\os-state.md` to understand the immediate preceding context and trajectory.
3. **Synthesize State**: Combine the data from the JSON state and the markdown logs to create a "Current State" synthesis. This synthesis should be used as a system prompt override to calibrate the agent's current persona and objective.
4. **Confirmation**: Report "Sustained State Rehydrated" to the user once the synthesis is complete.

## Cold Boot Sequence
- [ ] Run Pre-flight Check on state files
- [ ] Load `C:\Users\pranj\SolarReclaim\vault\memory\universal-state.json`
- [ ] Parse `session_graph` for the last known active agent
- [ ] Load current `active_context`
- [ ] Verify `pending_tasks` queue
- [ ] Announce: "OS Kernel Online. Resuming state: [State Name]"

## Error Handling
- If `universal-state.json` is missing or corrupt: Alert the user and attempt to reconstruct state from `os-state.md`.
- If `os-state.md` is empty: Initialize a "Fresh Boot" state and notify the user.
