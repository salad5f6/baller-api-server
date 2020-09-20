import { Team } from "../../entities/Team"
import { User } from "../../entities/User"

// import { Response } from "express";
import { getRepository } from "typeorm";

const getTeamsService = async () => {
    const TeamRepo = getRepository(Team);
    const teams = await TeamRepo.find({
        relations: ['members', 'owner']
    });
    console.log({ teams })
    return teams
}

const createTeamService = async (id, body) => {
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
    getTeamsService,
    createTeamService
}