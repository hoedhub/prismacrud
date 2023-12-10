export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.a77657d5.js","app":"_app/immutable/entry/app.c533d7e4.js","imports":["_app/immutable/entry/start.a77657d5.js","_app/immutable/chunks/scheduler.4f32addc.js","_app/immutable/chunks/singletons.d97dace5.js","_app/immutable/chunks/index.d8eea519.js","_app/immutable/entry/app.c533d7e4.js","_app/immutable/chunks/scheduler.4f32addc.js","_app/immutable/chunks/index.22d92533.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[articleId]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"articleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
