import { JsonDB, Config } from 'node-json-db';

export default class Database {
    constructor() {}
    log = () => true;

    setup = () => {
        var db = new JsonDB(new Config("db", true, false, '/'));
        db.push("/test1","super test");
        db.getData("/").then(res => console.log(res))
    }
}