module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        // '@vue/typescript/recommended',
        '@vue/prettier',
        // '@vue/prettier/@typescript-eslint',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/indent': ['off'],
        // '@typescript-eslint/no-unused-vars': ['error'],
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineComponent: 'readonly',
        defineExpose: 'readonly',
    },
}
