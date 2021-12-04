import {Entity, PrimaryGeneratedColumn, Column,OneToMany,ManyToOne} from "typeorm";
import {Todo} from './Todo'
import {Project} from './Project'

@Entity()
export class TodoList {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"varchar",length:"230"})
    title: string;

    
    @Column({type:"boolean",default:false})
    done?: Boolean;
    
    @Column({type:"date",default:new Date()})
    created_at?:Date
    
    @Column({type:"date"})
    done_at?:Date
    
    @OneToMany(() => Todo, todo => todo.todoList)
    todos: Todo[];

    @ManyToOne(() => Project, project => project.todoLists)
    project: TodoList;
}
