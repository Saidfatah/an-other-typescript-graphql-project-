import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Project} from './Project'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"varchar",length:"230"})
    firstName: string;

    @Column({type:"varchar",length:"230"})
    lastName: string;

    @Column({type:"varchar",length:"230"})
    email?: string;

    @Column({default:19})
    age?: number;

    @OneToMany(() => Project, project => project.user)
    projects: Project[];
}
