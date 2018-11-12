/* eslint-disable quote-props */

module.exports = {
	'extends': 'stylelint-config-standard',
	'rules': {
		'color-no-hex': true,
		'font-family-name-quotes': 'always-where-recommended',
		'font-weight-notation': 'numeric',
		'indentation': 'tab',
		'max-nesting-depth': 2,
		'no-duplicate-selectors': true,
		'number-leading-zero': 'never',
		'property-no-unknown': [
			true,
			{
				'ignoreProperties': [
					'composes',
				],
			},
		],
		'selector-max-id': 0,
		'string-quotes': 'single',
		'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
	},
};
