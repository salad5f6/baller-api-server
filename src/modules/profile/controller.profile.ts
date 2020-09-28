import { Response } from "express";

import { getProfileService, updateProfileService, updatePasswordService } from "./service.profile"

const getProfile = async (req: any, res: Response) => {
    const { id } = req.user;
    if (!id) throw new Error("no user found")

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(await getProfileService(id)));
    res.end();
}

const updateProfile = async (req: any, res: Response) => {
    const { id } = req.user;
    if (!id) throw new Error("no user found")

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(await updateProfileService(id, req.body)));
    res.end();
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