// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jquery": true
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    "no-with": 2,//禁用with
    "curly": [2, "all"],//必须使用 if(){} 中的{}
    "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
    "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
  }
}
