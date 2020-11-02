module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  //构建项目生成目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/style/main.scss";`
      }
    }
  }
}