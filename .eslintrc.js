module.exports = {
  extends: [
    'airbnb-typescript'
  ],
  env: {
    browser: true,
  },
  plugins: [
    'react-hooks',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/prefer-interface': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['error', {
      extensions: ['.tsx', '.jsx'],
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [{
    files: ['*.ts{,x}'],
    rules: {
      'react/prop-types': 'off',
      // Rules handled by TypeScript:
      'import/no-unresolved': 'off',
      // Rules overriden from TypeScript recommended:
      '@typescript-eslint/explicit-function-return-type': 'off',
      // used to create display name from function name
      'prefer-arrow-callback': 'off',
      'jsx-a11y/label-has-for': 'off',
    },
  }, {
    files: ['*.test.ts{,x}', '*.stories.ts{,x}', '*/opt/*'],
    env: {
      jest: true,
    },
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  }, {
    files: ['reducer.{j,t}s'],
    rules: {
      // We use redux-ts-actions which is built on top of immer
      'no-param-reassign': 'off',
    },
  }],
};
