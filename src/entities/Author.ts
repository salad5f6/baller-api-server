import { Photo } from "./Photo";
import { Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(_type => Photo, photo => photo.author) // note: we will create author property in the Photo class below
    photos: Photo[];
}