if ("__TAURI__" in window) {
	var __TAURI_PLUGIN_CLI__ = (function (_) {
		"use strict";
		return (
			"function" == typeof SuppressedError && SuppressedError,
			(_.getMatches = async function () {
				return await (async function (_, n = {}, e) {
					return window.__TAURI_INTERNALS__.invoke(_, n, e);
				})("plugin:cli|cli_matches");
			}),
			_
		);
	})({});
	Object.defineProperty(window.__TAURI__, "cli", {
		value: __TAURI_PLUGIN_CLI__,
	});
}
