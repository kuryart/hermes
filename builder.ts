const builder = await Bun.build({
  entrypoints: ["./src/main.ts"],
  outdir: "./build/chrome_extension",
  target: "bun",
});

console.log(builder);
