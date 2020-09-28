import { Column, PrimaryGeneratedColumn, Entity, ManyToMany, JoinTable, BeforeInsert, BeforeUpdate, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Team } from "./Team"
import { MatchMarking } from "./MatchMarking"
import * as bcrypt from "bcryptjs"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, default: null })
    name: string;

    @Column({ nullable: true, default: null })
    age: number

    @Column({ nullable: true, default: null })
    phoneNumber: string

    @Column({ nullable: true, default: null })
    avatar: BinaryType;

    @Column('text', { unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @ManyToMany(_type => Team, team => team.members)
    @JoinTable()
    teams: Team[];

    @OneToMany(_type => Team, team => team.owner)
    owningTeams: Team[];

    @ManyToOne(_type => MatchMarking, match => match.participants)
    currentMatchMarking: MatchMarking

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @BeforeInsert()
    @BeforeUpdate()
    preSave = async () => {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 8)
        }
    }
}