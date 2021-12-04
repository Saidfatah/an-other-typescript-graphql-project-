import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity {

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

}
