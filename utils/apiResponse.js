const successResponse = (res, message, data, code) => {
    const response = {
        meta: {
            code: code || 200,
            status: 'Success',
            message: message || 'Success',
        },
        data: data || {},
    };
    return res.status(code || 200).json(response);
};

const errorResponse = (res, message, error, code) => {
    const response = {
        meta: {
            code: code || 500,
            status: 'Error',
            message: message || 'Internal Server Error',
        },
        error: error || {},
    };
    return res.status(code || 500).json(response);
};

module.exports = {
    successResponse,
    errorResponse,
};
