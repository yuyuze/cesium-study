module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'airbnb-base',
    // prettier推荐规则,
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    // 关闭名称校验
    'vue/multi-word-component-names': 'off',
    // 禁止使用 var
    'no-var': 'error',
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    // 禁止any类型,报错关闭
    '@typescript-eslint/no-explicit-any': 'off',
    // 需要导出函数和类的公共类方法的显式返回和参数类型,报错关闭
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 禁止某些类型如String、Number,报错关闭
    '@typescript-eslint/ban-types': 'off',
    // 禁止未使用的变量,报错关闭
    '@typescript-eslint/no-unused-vars': 'off',
    // vue首行缩进两字符
    'vue/html-indent': [
      'error',
      2,
      {
        // 属性缩进的乘数。默认为1。
        attribute: 1,
        // 顶级语句的缩进倍数。默认为1。
        baseIndent: 1,
        // 右括号缩进的乘数。默认为0。
        closeBracket: 0,
        // 属性是否应垂直对齐到多行情况下的第一个属性的条件。默认为true
        alignAttributesVertically: true,
        // 忽略节点的选择器。默认是[]
        ignores: [],
      },
    ],
    // 每行最大属性数关闭
    'vue/max-attributes-per-line': ['off'],
    // 强制使用驼峰命名
    // 'vue/component-name-in-template-casing': [
    //   'error',
    //   'PascalCase',
    //   {
    //     // 如果true，则仅检查已注册的组件（在 PascalCase 中）。如果false，检查所有。默认true
    //     registeredComponentsOnly: false,
    //     ignores: [],
    //   },
    // ],
    // 编辑器里会给prettier错误进行报错
    'prettier/prettier': 'error',
  },
};
