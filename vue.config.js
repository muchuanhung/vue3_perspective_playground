const { defineConfig } = require('@vue/cli-service')
// ./vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue3_perspective_playground/'
    : '/'
}
