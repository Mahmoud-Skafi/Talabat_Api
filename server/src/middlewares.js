const jwt = require('jsonwebtoken');
function notFound(req, res, next) {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
    /* eslint-enable no-unused-vars */
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    });
}
function verifyToken(req, res, next) {
    // console.log(req.headers.authorization)
    if (!req.headers.authorization)
        return res.status(401).send('Unauthorized Request1');
    const token = req.headers.authorization;
    if (token === 'null')
        return res.status(401).send('Unauthorized Request2');
    let payload = jwt.verify(token, 'skafips');
    if (!payload)
        return res.status(401).send('Unauthorized Request3');
    if (!payload.role == 'admin')
        return res.status(401).send('Unauthorized Request3');
    else
        next();
    // req._id = payload.subject;
}
module.exports = {
    notFound,
    errorHandler,
    verifyToken
};
