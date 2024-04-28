import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReactConfig,
	{
		files: ['src/**/*.{js,jsx,ts,tsx}'],
		ignores: ['!src/**/*.{js,jsx,ts,tsx}', 'src/react-app-env.d.ts', 'src/reportWebVitals.ts'],
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			indent: ['error', 'tab'],
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
		},
	},
];

