import {Connection} from "typeorm";
import {TodoList} from "../entity/TodoList";
import { Database } from "./Database";



export const todoListRepository =async()=>{
    const database = new Database();
    const dbConn: Connection = await database.getConnection("default");
    return dbConn.getRepository(TodoList);
}