const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://igortrinidad.github.io/kanban-board-code-test/'
    : '/',

  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Kanban Board Code Test - By Igor Trindade',
    }
  }
})
