if (process.env.NODE_ENV === 'production') {
    // 실제 배포 DB
    module.exports = require('./prod');
} else { 
    // 개발 DB
    module.exports = require('./dev');
}