import path from "path";
import fs from "fs";

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";
import configureStore from "../src/configure-store";
import { initialState } from "./data/initialState";

const PORT = process.env.PORT || 3006;
const app = express();

app.get("/", (req, res) => {
  const store = configureStore(initialState);
  const app = ReactDOMServer.renderToString(<App store={store} />);

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }
    return res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        .replace("__REDUX__", JSON.stringify(store.getState()))
    );
  });
});

app.use(express.static(path.resolve(__dirname, "../build")));
app.use(express.static(path.resolve(__dirname, "../public")));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
