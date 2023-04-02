'use strict';

const kit = require('@nuxt/kit');

function addNitroImport(name, from) {
  const nuxt = kit.useNuxt();
  kit.addImports({ from, name });
  nuxt.hook("nitro:config", (config) => {
    var _a;
    config.imports ?? (config.imports = {});
    if (typeof config.imports === "boolean")
      return;
    (_a = config.imports).imports ?? (_a.imports = []);
    config.imports.imports.push({ from, name });
  });
}

exports.addNitroImport = addNitroImport;
