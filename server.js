//get createServer from http library
const { createServer } = require("http");
//get next library
const next = require("next");

//run the server as dev mode.
const app = next({
  //so check if production mode
  dev: process.env.NODE_ENV !== "production"
});

//import routes that we made
const routes = require("./routes");
//get handler
const handler = routes.getRequestHandler(app);
//setup app
app.prepare().then(() => {
  createServer(handler).listen(3000, error => {
    if (error) throw error;
    console.log("Ready on localhost!");
  });
});
