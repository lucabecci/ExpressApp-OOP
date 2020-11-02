const App = require("./app");
const app = new App();

async function main() {
  await app.initDb();
  await app.initConfig();
  await app.initMiddlewares();
  await app.initRoutes();
  await app.run();
}

main();
