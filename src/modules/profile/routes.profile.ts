import * as express from 'express';
import { getProfile, updateProfile, updatePassword } from "./controller.profile"

const ProfileRouter = express.Router()

ProfileRouter.use(function timeLog(_req, _res, next) {
    console.log('somehoan Profile: ', Date.now())
    next()
})

ProfileRouter.get('/profile/me', getProfile);
ProfileRouter.post('/profile/update', updateProfile);
ProfileRouter.post('/profile/change-password', updatePassword)


export default ProfileRouter;