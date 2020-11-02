class Database {
  constructor() {
    this.mongoose = require("mongoose");
    this.config = require("../config/config");
  }

  async connect() {
    let DB_URI = this.config.DB.URI;
    await this.mongoose
      .connect(DB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("DB is connected");
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

module.exports = Database;
