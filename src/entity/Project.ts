import {Entity, PrimaryGeneratedColumn, Column, BaseEntity,OneToMany} from "typeorm";
import {TodoList} from './TodoList'

@Entity()
export class Project extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"varchar",length:"230"})
    title: string;

    @Column({type:"boolean",default:false})
    done?: Boolean;

    @Column({type:"date",default:new Date()})
    created_at?:Date;

    @Column({type:"date"})
    done_at?:Date;

    @OneToMany(() => TodoList, todolist => todolist.project)
    todoLists: TodoList[];

}