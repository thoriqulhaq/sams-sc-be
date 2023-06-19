const { errorResponse } = require('../utils/apiResponse')

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    errorResponse(
        res,
        err.message,
        process.env.NODE_ENV === 'production' ? null : err.stack,
        statusCode
    )
}

module.exports = {
    errorHandler
}