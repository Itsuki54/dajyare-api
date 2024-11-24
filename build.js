const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/server.ts"],
  bundle: true,
  outfile: "dist/bundle.js",
  minify: true,
}).catch(() => process.exit(1));
