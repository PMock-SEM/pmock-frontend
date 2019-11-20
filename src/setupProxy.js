const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/users/auth/linkedin', { target: 'https://pmock-backend.appspot.com' }));
    app.use(proxy('/users/api/**', { target: 'https://pmock-backend.appspot.com' }));
    app.use(proxy('/coaches/auth/linkedin', { target: 'https://pmock-backend.appspot.com' }));
    app.use(proxy('/coaches/api/**', { target: 'https://pmock-backend.appspot.com' }));

};

