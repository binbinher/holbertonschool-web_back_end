// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import jest from 'eslint-plugin-jest';

export default [
	js.configs.recommended,
	{
		files: ['*.js'],
		ignores: ['babel.config.js'], // Ignore specific files
		languageOptions: {
			ecmaVersion: 2018,
			sourceType: 'module',
			globals: {
				...globals.es2021,
				jest: true,
			},
		},
		plugins: {
			jest,
		},
		rules: {
			'no-console': 'off',
			'no-shadow': 'off',
			'no-restricted-syntax': [
				'error',
				'LabeledStatement',
				'WithStatement',
			],
			'no-tabs': 'error', // Disallow tabs
			indent: ['error', 2], // Enforce 2-space indentation
		},
	},
];
