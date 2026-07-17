/**
 * ClickUp Integration - Phase 2 Placeholder
 * TODO: Add ClickUp task creation in Phase 2
 * TODO: Add ClickUp task preview from project/client
 * TODO: Add ClickUp task sync
 */
export async function createTaskFromProject(_projectId: string): Promise<null> {
  console.log('[ClickUp] Phase 2 placeholder');
  return null;
}
export async function syncProjectStatus(_projectId: string, _status: string): Promise<void> {
  console.log('[ClickUp] Phase 2 placeholder');
}
export default { createTaskFromProject, syncProjectStatus };
