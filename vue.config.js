module.exports = {
    devServer: {
      host:"localhost",
      port:"8080",
      open:true,
      proxy: {
        '/api': {
          target: 'http://47.102.218.228:10101',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/'
          }
        }
      }
    }
  }