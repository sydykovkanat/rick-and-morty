import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ['next'],
		rules: {
			'react-hooks/exhaustive-deps': 'off',
		},
	}),
];

export default eslintConfig;
