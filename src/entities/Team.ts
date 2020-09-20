import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User"
import { MatchMarking } from "./MatchMarking"

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column({ nullable: true, default: null })
    avatar: BinaryType;

    @Column({ nullable: true, default: null })
    images: BinaryType;

    @Column("text")
    description: string;

    @Column("text")
    location: string

    @ManyToMany(_type => User, user => user.teams)
    members: Team[];

    @ManyToOne(_type => User, user => user.owningTeams)
    owner: User;

    @ManyToOne(_type => MatchMarking, match => match.teams)
    scheduledMatch: MatchMarking[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}