import { Photo } from "../../entities/Photo"
import { Response } from "express";
import { getRepository } from "typeorm";

const getPhotosService = async (_req, res: Response) => {
    const PhotosRepo = getRepository(Photo)
    const photos = await PhotosRepo.find();
    console.log({ photos })
    res.send(photos);
}

export {
    getPhotosService
}