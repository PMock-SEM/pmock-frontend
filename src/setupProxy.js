const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
    app.use(proxy('/users/auth/linkedin', { target: 'http://localhost:3000' }));
    app.use(proxy('/users/api/**', { target: 'http://localhost:3000' }));
    app.use(proxy('/coaches/auth/linkedin', { target: 'http://localhost:3000' }));
    app.use(proxy('/coaches/api/**', { target: 'http://localhost:3000' }));

};

