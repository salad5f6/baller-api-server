import { Request, Response } from "express";

import { getPhotosService } from "./service.photos"

const getPhotos = async (_req: Request, res: Response) => {
    return getPhotosService(_req, res)
}

export {
    getPhotos
}