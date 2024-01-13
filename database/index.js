'use strict';
const mongoose = require('mongoose');

const db = require('../configs/db');

const connectString = `mongodb://${db.host}:${db.port}/${db.name}`;

class Database {
    constructor() {
        this.connect();
    }

    //connect
    connect() {
        mongoose
            .connect(connectString, { maxPoolSize: 50 })
            .then(() => console.log(`connected Mongodb success`))
            .catch((err) => console.log(`Error connect`));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
