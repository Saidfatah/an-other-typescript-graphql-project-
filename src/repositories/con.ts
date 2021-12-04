import { Database } from "./Database"
import {Connection} from 'typeorm'

const db = new Database()
export const con =async()=> {
    const connection :Connection = await db.getConnection("default")
    return connection
}