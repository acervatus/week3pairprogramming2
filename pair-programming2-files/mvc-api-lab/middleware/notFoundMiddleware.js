const notFoundMiddleware = (req, res, next) => {
    res.status(404).send('Resource not found');
};

module.exports = notFoundMiddleware;