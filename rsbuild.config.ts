import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

const ESLintPlugin = require("eslint-rspack-plugin");

export default defineConfig({
    plugins: [pluginReact()],
    tools: {
        rspack: {
            plugins: [new ESLintPlugin()],
            module: {
                rules: [
                    {
                        test: /\.pdf$/,
                        type: "asset/resource",
                        generator: {
                            filename: "assets/[name][ext]",
                        },
                    },
                ],
            },
        },
    },
    html: { title: "PSYCODER01" },
});
