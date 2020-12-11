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
    if (!req.headers.Authorization)
        return res.status(401).send('Unauthorized Request');
    const token = req.headers.Authorization;
    if (token === 'null')
        return res.status(401).send('Unauthorized Request');
    let payload = jwt.verify(token, 'skafips');
    if (!payload)
        return res.status(401).send('Unauthorized Request');
    req.userId = payload.subject;
    next();
}
module.exports = {
    notFound,
    errorHandler,
    verifyToken
};
