module.exports = {
	extends: [
		'./rules/base',
		'./rules/best-practice',
		'./rules/es6',
		'./rules/style',
		'./rules/react',
		'./rules/variables',
	].map(require.resolve),
};
