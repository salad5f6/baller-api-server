import * as express from 'express';
import { getTeams, createTeam } from "./controller.team"

const TeamRouter = express.Router()

TeamRouter.use(function timeLog(_req, _res, next) {
    console.log('Profile: ', Date.now())
    next()
})

TeamRouter.get('/team/teams', getTeams);
TeamRouter.post('/team/create', createTeam);

export default TeamRouter;