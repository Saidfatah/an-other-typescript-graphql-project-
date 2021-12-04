
import {Connection} from "typeorm";
import {Todo} from "../entity/Todo";
import { Database } from "./Database";


export const todoRepository = async()=>{
    const database = new Database();
    const dbConn: Connection = await database.getConnection("default");
    return dbConn.getRepository(Todo);
}