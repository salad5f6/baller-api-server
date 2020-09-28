import { Team } from "../../entities/Team"
import { User } from "../../entities/User"
import { MatchMarking } from "../../entities/MatchMarking"


// import { Response } from "express";
import { getRepository } from "typeorm";

const getMatchesService = async (filter) => {
    const MatchMarkingRepo = getRepository(MatchMarking);
    const matches = await MatchMarkingRepo.find({
        where: { filter },
        relations: ['creator', 'teams']
    });
    console.log({ matches })
    return matches
}

const createMatchService = async (id, body) => {
    const TeamRepo = getRepository(Team);
    const UserRepo = getRepository(User);

    let user = await UserRepo.findOne({
        where: { id },
        relations: ['teams', 'owningTeams'],
    });
    if (!user) throw new Error("user not found");

    let team = new Team();
    team = Object.assign(team, await TeamRepo.create(body));
    team.owner = user;
    await TeamRepo.save(team);

    user.teams = [...user.teams, team];
    user.owningTeams = [...user.owningTeams, team]

    await UserRepo.save(user)
    return team;
}

export {
    getMatchesService,
    createMatchService
}