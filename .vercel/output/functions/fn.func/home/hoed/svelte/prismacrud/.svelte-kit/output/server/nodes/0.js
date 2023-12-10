

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.68567081.js","_app/immutable/chunks/scheduler.4f32addc.js","_app/immutable/chunks/index.22d92533.js","_app/immutable/chunks/index.d8eea519.js"];
export const stylesheets = ["_app/immutable/assets/0.f4a021c1.css"];
export const fonts = [];
