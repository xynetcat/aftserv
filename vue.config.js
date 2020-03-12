module.exports = {
    devServer: {
      host:"localhost",
      port:"8080",
      open:true,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:20102',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/'
          }
        }
      }
    }
  }