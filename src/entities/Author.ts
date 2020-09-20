import { Photo } from "./Photo";
import { Column, PrimaryGeneratedColumn, OneToMany, Entity } from "typeorm";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(_type => Photo, photo => photo.author)
    photos: Photo[];
}