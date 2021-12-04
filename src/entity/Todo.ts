import {Entity, PrimaryGeneratedColumn, Column, BaseEntity,ManyToOne} from "typeorm";
import {TodoList} from './TodoList'
@Entity()
export class Todo extends BaseEntity {

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

    @ManyToOne(() => TodoList, todoList => todoList.todos)
    todoList: TodoList;

}
