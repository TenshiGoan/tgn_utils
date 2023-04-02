import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  externals: ["@nuxt/kit"],
  declaration: true,
});
