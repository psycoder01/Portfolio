import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

const ESLintPlugin = require("eslint-rspack-plugin");

export default defineConfig({
    plugins: [pluginReact()],
    tools: {
        rspack: {
            plugins: [new ESLintPlugin()],
        },
    },
});
