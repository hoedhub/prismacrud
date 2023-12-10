import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.14985b90.js","_app/immutable/chunks/scheduler.4f32addc.js","_app/immutable/chunks/index.22d92533.js","_app/immutable/chunks/singletons.d97dace5.js","_app/immutable/chunks/index.d8eea519.js"];
export const stylesheets = [];
export const fonts = [];
