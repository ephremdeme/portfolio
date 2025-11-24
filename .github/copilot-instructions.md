## Workspace Checklist
- [x] Verify that this instructions file exists.
- [x] Clarify project requirements (ask for project type, language, frameworks if missing).
- [x] Scaffold the project (confirm previous step, call project setup tool with projectType, scaffold inside "." workspace, research and create structure manually if no template fits).
- [x] Customize the project (ensure prior steps complete, plan changes, implement with the right tools, skip for trivial hello-world work).
- [x] Install required extensions only if get_project_setup_info requests them.
- [ ] Compile the project (after earlier steps, install missing deps, run diagnostics, follow repo markdown guidance).
- [ ] Create and run task (after earlier steps, review https://code.visualstudio.com/docs/debugtest/tasks, use create_and_run_task when needed, otherwise skip).
- [ ] Launch the project (ensure prerequisites are done, ask about debug mode, launch only with confirmation).
- [ ] Ensure documentation is complete (confirm README.md and this file are current and comment-free).

## Execution Guidelines
**Progress tracking**
- Use available tools to manage the todo list for this checklist.
- Mark steps complete with short summaries and review status before starting new work.

**Communication rules**
- Stay concise and avoid dumping long command outputs.
- Note skipped steps briefly (e.g., "No extensions needed").
- Only describe project structure when requested.

**Development rules**
- Use the current directory (`.`) as the working root unless told otherwise.
- Avoid adding media or external links unless requested.
- Flag placeholder assets so they can be replaced.
- Use the VS Code API tool solely for extension projects.
- Do not provide commands to reopen the project in VS Code.
- Follow any extra rules provided by project setup info.

**Folder creation rules**
- Treat the current directory as the project root.
- Include `.` when commands need a working-directory argument.
- Create new folders only when explicitly requested (except `.vscode` for tasks.json when required).
- If scaffolding tools reject the folder name, instruct the user to rename/reopen the workspace.

**Extension installation rules**
- Install only the extensions identified by get_project_setup_info.

**Project content rules**
- Default to a "Hello World" scaffold when requirements are unclear.
- Avoid unsolicited integrations or links.
- Skip generating media unless asked.
- Ensure each generated component satisfies a stated need.
- Ask for clarification before adding unconfirmed features.
- For VS Code extensions, reference the official API docs via the provided tool.

**Task completion rules**
- Work is complete when the project scaffolds and compiles without errors, `.github/copilot-instructions.md` and `README.md` reflect the current state, and the user has clear debug/launch instructions.
- Update the progress plan before starting any new task.

- Work through each checklist item systematically.
- Keep communication concise and focused.
- Follow development best practices.
