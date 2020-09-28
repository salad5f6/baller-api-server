import { Response } from "express";

import { getMatchesService, createMatchService } from "./service.matchMarking"

const getMatches = async (req, res: Response) => {
    const filter = req.body
    const teams = await getMatchesService(filter);
    return res.end(teams)
}

const createMatch = async (req: any, res: Response) => {
    const { id } = req.user;
    if (!id) throw new Error("no user found")
    return res.end(await createMatchService(id, req.body));
}

export {
    getMatches,
    createMatch
}