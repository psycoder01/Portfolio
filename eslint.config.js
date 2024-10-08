module.exports = {
    $schema: "https://json.schemastore.org/eslintrc.json",
    env: {
        browser: false,
        es2021: true,
        node: true,
    },
    extends: [
        "react-app",
        "react-app/jest",
        "airbnb",
        "airbnb-typescript",
        "plugin:import/typescript",
        "prettier",
        "plugin:react/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier",
        "unused-imports",
        "import",
        "@typescript-eslint",
    ],
    ignores: [
        "node_modules",
        "build",
        "dist",
        "public",
        "*.css",
        "test/*",
        "*.config.js",
        "package.json",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
    },
};
