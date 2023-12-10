

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2b7ab496.js","_app/immutable/chunks/scheduler.4f32addc.js","_app/immutable/chunks/index.22d92533.js","_app/immutable/chunks/singletons.d97dace5.js","_app/immutable/chunks/index.d8eea519.js"];
export const stylesheets = [];
export const fonts = [];
