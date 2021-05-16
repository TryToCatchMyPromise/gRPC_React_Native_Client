module.exports = {
  plugins: ['react', '@typescript-eslint', 'prefer-arrow', 'import', 'prettier'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'dot-notation': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-default': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'prefer-object-spread': 'off',
    'prettier/prettier': 'warn',
    'react/destructuring-assignment': [2, 'always', {ignoreClassFields: true}],
    'react/display-name': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.ts', '.tsx']}],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/static-property-placement': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      env: {
        browser: true,
        es6: true,
        node: true
      },
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        project: ['{src,test,}/tsconfig.json']
      }
    }
  ]
}
