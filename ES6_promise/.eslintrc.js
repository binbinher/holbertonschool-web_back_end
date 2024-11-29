module.exports = {
	env: {
		browser: false,
		es6: true,
		jest: true,
	},
	extends: [
		'airbnb-base',
		'plugin:jest/all',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['jest'],
	rules: {
		'max-classes-per-file': 'off', // Allow multiple classes per file
		'no-underscore-dangle': 'off', // Disable restriction on underscores
		'no-console': 'off', // Allow console statements
		'no-shadow': 'off', // Allow variable shadowing
		'no-restricted-syntax': [
			'error',
			'LabeledStatement',
			'WithStatement',
		], // Disallow labeled and with statements
		'no-tabs': 'error', // Disallow tab characters
		indent: ['error', 2], // Enforce 2 spaces for indentation
	},
	overrides: [
		{
			files: ['*.js'], // Apply rules to JavaScript files
			excludedFiles: ['babel.config.js'], // Exclude babel.config.js explicitly
		},
	],
};
