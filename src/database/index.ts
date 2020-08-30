import { createConnection } from 'typeorm';
// import { Photo } from "../entities/Photo"
// import { PhotoMetadata } from "../entities/PhotoMetadata"

export const connectDB = async () => {
    await createConnection();

    // let photoRepository = connection.getRepository(Photo);
    // let photos = await photoRepository.find({ relations: ["metadata"] });
    // console.log({ photos })
};