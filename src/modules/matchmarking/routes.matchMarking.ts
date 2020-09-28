import * as express from 'express';
import { getMatches, createMatch } from "./controller.matchMarking"

const MatchMarkingRouter = express.Router()

MatchMarkingRouter.use(function timeLog(_req, _res, next) {
    console.log('Profile: ', Date.now())
    next()
})

MatchMarkingRouter.get('/match-marking/matches', getMatches);
MatchMarkingRouter.post('/match-marking/create', createMatch);

export default MatchMarkingRouter;