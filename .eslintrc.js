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
    'no-multi-str': 2,//字符串不能用\换行
    "no-undef": 2,//不能有未定义的变量
    "no-unreachable": 2,//不能有无法执行的代码
    "no-unused-vars": [1, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
    "no-use-before-define": 2,//未定义前不能使用
    "no-with": 2,//禁用with
    "arrow-spacing": 0,//=>的前/后括号
    "brace-style": [1, "1tbs"],//大括号风格
    "comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
    "complexity": [0, 11],//循环复杂度
    "curly": [2, "all"],//必须使用 if(){} 中的{}
    // "indent": [2, 4],//缩进风格
    "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
    "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
  }
}
