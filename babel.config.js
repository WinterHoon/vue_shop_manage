const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  // 之前push后面用了[]中括号，难怪一直不起作用
  prodPlugins.push('transform-remove-console')
}


module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // 'transform-remove-console'
    ...prodPlugins
  ]
}
