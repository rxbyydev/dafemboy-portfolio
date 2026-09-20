/**
 * Cloudflare Worker for dafemboy.dev
 *
 * The Vite build (this SPA) lands in ./dist and is served through the
 * Workers Static Assets binding `ASSETS`. Unknown paths fall back to
 * index.html (see `not_found_handling: single-page-application` in
 * wrangler.jsonc) so Vue Router handles client-side routes.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
