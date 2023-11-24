import { MongoClient, Collection } from "mongodb";
import { ObjectId, UUID } from "bson";
import log from "../logger";
import LogLevel from "../enums/logLevel";
import confirmationToken from "../interfaces/confirmationToken";


let confirmationTokens: Collection<confirmationToken>;

/**
 * Data Access Object for users. This code interacts directly with the database.
 */
export default class usersDao {
    /**
     * This function is called when the server starts.
     * It passes the connection over to this class so it can be used to interact with the database.
     * @param conn MongoDB connection
     * @returns 
     */
    static async injectDB(conn: MongoClient) {
        if (confirmationTokens) {
            return;
        }
        try {
            confirmationTokens = await conn.db(process.env.DB_NAME).collection("users");
        } catch (e) {
            log(LogLevel.Error, `Unable to establish collection handles in loginConfirmationDAO: ${e}`);
        }
    }

    /**
     * Gets a confirmation token by its ID.
     * @param id confirmation token ID
     * @returns confirmation token
     */
    static async getConfirmationTokenById(id: UUID) {
        try {
            return await confirmationTokens.findOne({_id: id});
        } catch (e) {
            log(LogLevel.Debug, `Unable to get confirmation token: ${e}`);
            return null;
        }
    }
    
}