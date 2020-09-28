import { Response } from "express";

import { getTeamsService, createTeamService } from "./service.team"

const getTeams = async (_req, res: Response) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(await getTeamsService()));
    res.end();
}

const createTeam = async (req: any, res: Response) => {
    const { id } = req.user;
    if (!id) throw new Error("no user found")
    return res.end(await createTeamService(id, req.body));
}

// const updateProfile = async (req: any, res: Response) => {
//     const { id } = req.user;
//     if (!id) throw new Error("no user found")
//     return await updateProfileService(id, req.body, res);
// }

// const updatePassword = async (req: any, res: Response) => {
//     const { id } = req.user;
//     if (!id) throw new Error("no user found");
//     return res.end(await updatePasswordService(id, req.body))
// }

export {
    getTeams,
    createTeam
}