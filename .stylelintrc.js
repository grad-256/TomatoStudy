module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-prettier',
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-colon-newline-after': null,
    'no-duplicate-selectors': true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-disallowed-list': ['import', 'extends'],
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'after-same-name',
          'blockless-after-same-name-blockless',
          'blockless-after-blockless',
          'first-nested',
        ],
        ignore: ['after-comment', 'inside-block', 'blockless-after-blockless'],
        ignoreAtRules: ['array', 'of', 'at-rules'],
      },
    ],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['use', 'forward', 'tailwind'],
      },
    ],
    'block-no-empty': null,
    'unit-allowed-list': null,
    'order/order': [
      'custom-properties',
      'dollar-variables',
      {
        type: 'at-rule',
        hasBlock: true,
      },
      'declarations',
      {
        type: 'at-rule',
        name: 'extend',
      },
      {
        type: 'at-rule',
        name: 'include',
      },
      'rules',
      {
        type: 'rule',
        selector: /^&::\w/,
      },
      {
        type: 'rule',
        selector: /^&/,
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'scss/at-each-key-value-single-line': true,
    'scss/at-if-no-null': true,
    'scss/at-rule-conditional-no-parentheses': true,
    'scss/comment-no-loud': true,
    'scss/declaration-nested-properties': 'never',
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['after-dollar-variable'],
        ignore: ['after-comment'],
      },
    ],
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/function-color-relative': true,
    'scss/function-quote-no-quoted-strings-inside': true,
    'scss/function-unquote-no-unquoted-strings-inside': true,
    'scss/map-keys-quotes': 'always',
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        ignoreInsideAtRules: ['if', 'mixin'],
      },
    ],
    'scss/no-global-function-names': true,
    'scss/partial-no-import': true,
    'scss/selector-no-union-class-name': true,
    'selector-class-pattern': null,
  },
}
