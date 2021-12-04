import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToMany} from "typeorm";
import {TodoList} from './TodoList'
import {User} from './User'

// a project can be owned by diffrent users 
// a user can be colborator or admin 
@Entity()
export class Project  {

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

    @ManyToOne(() => User, user => user.projects)
    user: User;
}
