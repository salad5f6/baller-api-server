import { User } from "../../entities/User"
import { getRepository } from "typeorm";
import { omit } from "lodash"

const getProfileService = async (id: number) => {
    const UserRepo = getRepository(User);
    const user = await UserRepo.findOne({ where: { id }, relations: ['teams', 'owningTeams', 'currentMatchMarking'] });
    if (user) return omit(user, ['updatedAt', 'password']);
    return null;
}

const updateProfileService = async (id: number, body: any) => {
    const UserRepo = getRepository(User);
    let user = await UserRepo.findOne({
        where: { id },
        relations: ['teams'],
    });
    if (!user) throw new Error("user not found");
    return await UserRepo.save(Object.assign(user, body), { listeners: false });

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