// module.exports = {
//   extends: [
//     // add more generic rulesets here, such as:
//     // 'eslint:recommended',
//     'plugin:vue/vue3-recommended',
//     // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
//   ],
//   rules: {
//     // override/add rules settings here, such as:
//     // 'vue/no-unused-vars': 'error'
//   }
// }

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
