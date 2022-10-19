const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // Map custom route to existing page "/post" along with query params 
    server.get("/p/:id", (req, res) => {
      const page = "/post";
      const queryParams = { id: req.params.id };
      app.render(req, res, page, queryParams);
    });

    // Deal with wildcard requests
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    // Listen on port 3000
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("Running on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
