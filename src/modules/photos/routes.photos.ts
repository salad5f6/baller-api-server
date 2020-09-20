import * as express from 'express';
import { getPhotos } from "./controller.photos"

const PhotoRouter = express.Router()

PhotoRouter.use(function timeLog(_req, _res, next) {
    console.log('Time: ', Date.now())
    next()
})

PhotoRouter.get('/photos', getPhotos)

export default PhotoRouter;