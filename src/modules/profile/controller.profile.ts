import { Response } from "express";

import { getProfileService, updateProfileService, updatePasswordService } from "./service.profile"

const getProfile = async (req: any, res: Response) => {
    const { id } = req.user;
    if (!id) throw new Error("no user found")
    return res.end(await getProfileService(id))
}

const updateProfile = async (req: any, res: Response) => {
    const { id } = req.user;
    if (!id) throw new Error("no user found")
    return await updateProfileService(id, req.body, res);
}

const updatePassword = async (req: any, res: Response) => {
    const { id } = req.user;
    if (!id) throw new Error("no user found");
    return res.end(await updatePasswordService(id, req.body))
}

export {
    getProfile,
    updateProfile,
    updatePassword
}