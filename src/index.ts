import { addImports, useNuxt } from "@nuxt/kit";

export function addNitroImport(name: string, from: string) {
  const nuxt = useNuxt();

  addImports({ from, name });

  nuxt.hook("nitro:config", (config) => {
    config.imports ??= {};
    if (typeof config.imports === "boolean") return;
    config.imports.imports ??= [];
    config.imports.imports.push({ from, name });
  });
}
