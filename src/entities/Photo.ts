import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from "typeorm";
import { PhotoMetadata } from "./PhotoMetadata"
import { Author } from "./Author"

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column("text")
    description: string;

    @Column()
    filename: string;

    @Column("double precision")
    views: number;

    @Column()
    isPublished: boolean;

    @OneToOne(_type => PhotoMetadata, photoMetadata => photoMetadata.photo)
    metadata: PhotoMetadata;

    @ManyToOne(_type => Author, author => author.photos)
    author: Author
}