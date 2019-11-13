/**
 * @author Amjesh
 * @date 
 */

class ResponseHandler {
    constructor(logger) {
        this.logger = logger;
    }

    /**
     * Catch Error
     * @param {*} res 
     * @param {*} error 
     */
    catchError(res, error) {
        this.logger.log(`catchError function call`);
        if (!error) error = new Error('Somthing went wrong! Please try agin');
        res.status(error.status || 500).json({ 
            status: 'error', 
            message: error.message || 'Unhandled error', 
            data: error 
        });
    }

    /**
     * Send success response
     * @param {*} res 
     * @param {*} message 
     * @param {*} status 
     */
    sendSuccess(res, status, data, message) {
        this.logger.log(`a request has been made and proccessed successfully at: ${new Date()}`);
        return res.status(status || 200).json({
            status: 'success', 
            message: message || "Success", 
            data: data
        });
    }

    /**
     * Send Error response
     * @param {*} req 
     * @param {*} res 
     * @param {*} error 
     */
    sendError(res, status, message) {
        this.logger.log(`send error function call in ResponeHandler on ${new Date()} and message is ${message}` , 'error');
        return res.status(status || 500).json({
            status: 'error', 
            message: message || 'Unhandled Error', 
            data: {},
        });
    }
}

module.exports = ResponseHandler;