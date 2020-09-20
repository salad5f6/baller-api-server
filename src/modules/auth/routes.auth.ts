import * as express from 'express';
import { login, register } from "./controller.auth"

const AuthRouter = express.Router()
AuthRouter.post('/login', login)
AuthRouter.post('/register', register)


export default AuthRouter;