import SuccessResponse from "./../Responses/SuccessResponse";
import NotFoundResponse from "./../Responses/NotFoundResponse";
import { UserController } from "./../Controllers/UserController";
import { NotFoundException } from "./../Exceptions/NotFoundException";
import InternalServerErrorResponse from "./../Responses/InternalServerErrorResponse";

module.exports = server => {

    /**
     * Create new user route
     */
    server.post('/user/create', async (req, res) => {
        try {
            const result = await new UserController().store(req.body);
            SuccessResponse(res, "Successfully create new user!", result);
        } catch (exception) {
            InternalServerErrorResponse(res, exception.message);
        }
    });

    /**
     * Update user route
     */
    server.post('/user/update/:userId', async (req, res) => {
        try {
            const result = await new UserController().update(req.params.userId, req.body);
            SuccessResponse(res, "Successfully update user data!", result);
        } catch (exception if exception instanceof NotFoundException) {
            NotFoundResponse(res, exception.message);
        } catch(exception) {
            InternalServerErrorResponse(res, exception.message);
        }
    });

    /**
     * Remove user route
     */
    server.post('/user/remove', async (req, res) => {
        try {
            const result = await new UserController().remove(req.body.userId);
            SuccessResponse(res, "Successfully remove user!", null);
        } catch (exception if exception instanceof NotFoundException) {
            NotFoundResponse(res, exception.message);
        } catch(exception) {
            InternalServerErrorResponse(res, exception.message);
        }
    });

    /**
     * Get all user route
     */
    server.get('/user/list', async (req, res) => {
        try {
            const result = await new UserController().list();
            SuccessResponse(res, "Successfully get all users!", result);
        } catch (exception) {
            InternalServerErrorResponse(res, exception.message);
        }
    });

    /**
     * get detail user route
     */
    server.get('/user/detail/:userId', async (req, res) => {
        try {
            const result = await new UserController().detail(req.params.userId);
            SuccessResponse(res, "Successfully get detail user!", result);
        } catch (exception if exception instanceof NotFoundException) {
            NotFoundResponse(res, exception.message);
        } catch(exception) {
            InternalServerErrorResponse(res, exception.message);
        }
    });
};