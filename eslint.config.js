const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintConfigPrettier = require('eslint-config-prettier');
const pluginPrettier = require('eslint-plugin-prettier');
const unusedImports = require('eslint-plugin-unused-imports');

module.exports = defineConfig([
    ...expoConfig,
    // Disable ESLint rules that conflict with Prettier
    eslintConfigPrettier,
    {
        plugins: {
            prettier: pluginPrettier,
            'unused-imports': unusedImports,
        },
        rules: {
            /* -------- Prettier -------- */
            'prettier/prettier': 'warn',

            /* -------- TypeScript -------- */
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',

            /* -------- Unused vars / imports -------- */
            // Disable base rules — unused-imports plugin handles these
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'warn',
            'unused-imports/no-unused-vars': [
                'error',
                { vars: 'all', args: 'none', ignoreRestSiblings: true },
            ],

            /* -------- ES6+ -------- */
            'no-console': 'off',
            'no-param-reassign': ['error', { props: false }],
            'no-underscore-dangle': 'off',
            'no-plusplus': 'off',
            'no-bitwise': ['error', { allow: ['~'] }],
            'no-restricted-syntax': 'off',
            'no-continue': 'off',
            'no-await-in-loop': 'off',
            'no-return-await': 'off',

            /* -------- React -------- */
            'react/prop-types': 'off',
            'react/display-name': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/require-default-props': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/jsx-no-useless-fragment': 'off',
            // Enforce arrow functions for components
            'react/function-component-definition': [
                'error',
                { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
            ],

            /* -------- React Hooks -------- */
            'react-hooks/exhaustive-deps': 'warn',

            /* -------- Import ordering -------- */
            'import/prefer-default-export': 'off',
            'import/extensions': 'off',
            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    pathGroups: [{ pattern: '@/**', group: 'internal' }],
                    'newlines-between': 'always',
                },
            ],
        },
    },
    {
        ignores: ['dist/*', 'node_modules/*', '.expo/*', 'scripts/*'],
    },
]);
