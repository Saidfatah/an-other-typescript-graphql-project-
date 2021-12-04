import {Connection} from "typeorm";
import {Project} from "../entity/Project";
import {Database} from './Database'



export const projectRepository =async()=> {
    const database = new Database();
    const dbConn: Connection = await database.getConnection("default");
    return dbConn.getRepository(Project);
    
}