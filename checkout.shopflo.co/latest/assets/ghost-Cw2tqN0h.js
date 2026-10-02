(function() {
    try {
        var e = typeof window < `u` ? window : typeof global < `u` ? global : typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = `9189c9c7-cc35-4237-bb8b-2a51b8ab7813`, e._sentryDebugIdIdentifier = `sentry-dbid-9189c9c7-cc35-4237-bb8b-2a51b8ab7813`)
    } catch {}
})();
import {
    t as e
} from "./page-ghost-DmA0ANjB.js";
export {
    e as
    default
};