import { Column, PrimaryGeneratedColumn, Entity, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User"
import { Team } from "./Team"

@Entity()
export class MatchMarking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column({
        length: 100
    })
    description: string;

    @OneToMany(_type => User, user => user.currentMatchMarking)
    participants: User[]

    @Column()
    scheduleTime: string

    @ManyToOne(_type => User, user => user)
    creator: User

    @OneToMany(_type => Team, team => team)
    teams: Team[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
