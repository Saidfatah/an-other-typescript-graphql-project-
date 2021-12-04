import { Connection, ConnectionManager, createConnection, getConnectionManager } from 'typeorm';

export class Database {
  private connectionManager: ConnectionManager;

  constructor() {
    this.connectionManager = getConnectionManager();
  }

  public async getConnection(name: string): Promise<Connection> {
    const CONNECTION_NAME: string = name;
    let connection: Connection;
    const hasConnection = this.connectionManager.has(CONNECTION_NAME);
    if (hasConnection) {
      connection = this.connectionManager.get(CONNECTION_NAME);
      if (!connection.isConnected) {
        connection = await connection.connect();
      }
    } else {

    //   const connectionOptions: ConnectionOptions = {
    //         "type": "postgres",
    //         "host": "localhost",
    //         "port": 5432,
    //         "username": "saidfatah",
    //         "password": "0638165046",
    //         "database": "gqlts",
    //         "synchronize": true,
    //         "logging": false,
    //         "entities": [
    //            "src/entity/**/*.ts"
    //         ],
    //         "migrations": [
    //            "src/migration/**/*.ts"
    //         ],
    //         "subscribers": [
    //            "src/subscriber/**/*.ts"
    //         ],
    //         "cli": {
    //            "entitiesDir": "src/entity",
    //            "migrationsDir": "src/migration",
    //            "subscribersDir": "src/subscriber"
    //         }
    //   };
      connection = await createConnection();
    }
    return connection;
  }
}