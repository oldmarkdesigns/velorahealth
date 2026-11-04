// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
	// The deployed address (Vercel). Used to build absolute URLs, e.g. the link-preview image.
	site: 'https://velorahealth-ten.vercel.app',
	vite: {
		build: {
			// Lightning CSS adds `-webkit-backdrop-filter` for these browsers, so components write only
			// `backdrop-filter`. A hand-written prefixed copy beside it made the build drop the standard
			// one, and the hero pills lost their blur in Chrome on Vercel.
			cssTarget: ['chrome111', 'edge111', 'firefox114', 'safari15', 'ios15'],
		},
	},
});
