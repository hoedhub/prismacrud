import * as server from '../entries/pages/_articleId_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_articleId_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[articleId]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.03937449.js","_app/immutable/chunks/scheduler.4f32addc.js","_app/immutable/chunks/index.22d92533.js"];
export const stylesheets = [];
export const fonts = [];
