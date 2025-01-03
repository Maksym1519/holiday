import js from '@eslint/js';

export default [
  js.configs.recommended, // Базовая конфигурация для JavaScript
 
  {
    files: ['**/*.js', '**/*.jsx', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly', 
      },
    },
    rules: {
      'no-console': 'warn', // Выдавать предупреждение при использовании console
      "no-undef": ["error", { "typeof": true }]
    },
  },
];
