import { Request, Response } from "express";

import { loginService, registerService } from "./service.auth"

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    return loginService({ email, password }, res)
}

const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    return registerService({ email, password }, res)
}

export {
    login,
    register
}