const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api',{
            target: 'http://18.221.22.88:5000/',
            changeOrigin: true
        })
    );

};