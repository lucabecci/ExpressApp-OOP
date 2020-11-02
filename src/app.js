class App {
  constructor() {
    //imports
    this.express = require("express");
    this.morgan = require("morgan");
    this.config = require("./config/config");
    //initialize the app
    this.app = this.express();
    //database imps
    this.Database = require("./database/database");
    this.database = new this.Database();
    //routes imp
    this.indexRoutes = require("./routes/index.routes");
  }
  //started DB
  initDb() {
    this.database.connect();
  }
  //started config for app
  initConfig() {
    this.app.set("port", this.config.PORT);
  }
  //started and apply middlewares
  initMiddlewares() {
    this.app.use(this.express.json());
    this.app.use(this.express.urlencoded({ extended: false }));
    this.app.use(this.morgan("dev"));
  }
  //initilization for my routes
  initRoutes() {
    this.app.use("/", this.indexRoutes);
  }
  //start the app
  async run() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port", this.app.get("port"));
  }
}

module.exports = App;
