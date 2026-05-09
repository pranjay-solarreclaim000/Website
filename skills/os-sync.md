# Skill: OS Synchronization (os-sync)

## Purpose
Maintain a persistent, machine-readable and human-readable record of the SolarReclaim OS state to prevent context rot and ensure consistent behavior across sessions.

## SOP: Execution Logic
When an `os-sync` is triggered or required (e.g., at the start/end of a session or after a major state transition):

1. **Read State**: Read the current state from `C:\Users\pranj\SolarReclaim\vault\memory\universal-state.json`.
2. **Update Machine**:
   - Update `state_machine.current_state` to reflect the new operational phase.
   - Update `state_machine.last_event` to the name of the triggering event.
3. **Record Session**:
   - Append a new entry to the `session_graph` array. 
   - Format: `{"timestamp": "ISO_TIMESTAMP", "event": "EVENT_NAME", "description": "Short summary of change"}`.
4. **Timestamp**: Update `last_updated` to the current ISO timestamp.
5. **Persist JSON**: Write the updated object back to `C:\Users\pranj\SolarReclaim\vault\memory\universal-state.json`.
6. **Update Human Log**: Append a line to `C:\Users\pranj\SolarReclaim\vault\memory\os-state.md` following this exact format:
   `[ISO_TIMESTAMP] EVENT_NAME: Description of change`

## Triggers
- **Boot Sequence**: On session start.
- **Task Completion**: When a major milestone in the task list is marked `completed`.
- **Plan Shift**: When a new implementation plan is created or significantly revised.
- **Critical Error**: When a systemic failure occurs that requires state rollback or notation.
