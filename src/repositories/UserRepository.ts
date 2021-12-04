import {Connection} from "typeorm";
import {User} from "../entity/User";
import { Database } from "./Database";


export const userRepository =async()=>{
    const database = new Database();
    const dbConn: Connection = await database.getConnection("default");
    return dbConn.getRepository(User);
}
