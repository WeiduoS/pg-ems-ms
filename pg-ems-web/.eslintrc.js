module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: "@typescript-eslint/parser",
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    plugins: ['import', 'react'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'semi': ['warn', 'always'],
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': "off"
    }
};
