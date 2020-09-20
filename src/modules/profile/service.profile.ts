import { User } from "../../entities/User"
import { Response } from "express";
import { getRepository } from "typeorm";

const getProfileService = async (id: number) => {
    const UserRepo = getRepository(User);
    const user = await UserRepo.findOne({ id });
    if (user) return user;
    return null;
}

const updateProfileService = async (id: number, body: any, res: Response) => {
    const UserRepo = getRepository(User);
    let user = await UserRepo.findOne({
        where: { id },
        relations: ['teams'],
    });
    if (!user) throw new Error("user not found");
    const response = await UserRepo.save(Object.assign(user, body), { listeners: false });
    res.status(200);
    res.end(response)
}

const updatePasswordService = async (id: number, body: any) => {
    const UserRepo = getRepository(User);
    let user = await UserRepo.findOne({
        where: { id },
        relations: ['teams', 'owningTeams'],
    });
    if (!user) throw new Error("user not found");
    return await UserRepo.save(Object.assign(user, body), { listeners: true });;
}

export {
    getProfileService,
    updateProfileService,
    updatePasswordService
}