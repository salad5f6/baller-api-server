import * as bcrypt from "bcryptjs"

import { User } from "../../entities/User"
import { Response } from "express";
import { getRepository } from "typeorm";
import tokenService from "../../services/tokenActions"

const loginService = async ({ email, password }, res: Response) => {
    try {
        const UserRepo = getRepository(User)
        const user = await UserRepo.findOne({ email });
        if (!user) throw new Error("Email doesn't exist");
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) throw new Error("Password is not correct");
        const { data } = await tokenService.generateTokenService(user)
        res.send(data);
    } catch (err) {
        throw (err)
    }
}

const registerService = async ({ email, password }, res: Response) => {
    try {
        const UserRepo = getRepository(User)
        const validEmail = await UserRepo.findOne({ email });
        if (validEmail) {
            res.status(400);
            res.send("Email has been used")
            throw new Error("Email has been used")
        }
        const newUser = await UserRepo.create({ email, password });
        UserRepo.save(newUser);
        res.send("Email register successfully");
    } catch (err) {
        throw (err)
    }
}

export {
    loginService,
    registerService
}