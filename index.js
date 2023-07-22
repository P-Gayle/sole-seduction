import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnect from './src/dbConnect.js';
import environmentConfig from './src/environmentConfig.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


import { categories } from './src/routes/categories.route.js';
import { products } from './src/routes/singleProduct.route.js';

const app = express();
const PORT = process.env.PORT || 8800
environmentConfig;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use((cors()));
app.use(bodyParser.json());

// dbConnect();


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use("/categories", categories);
app.use("/products", products);

//For Cyclic deployment - to serve the frontend
app.use(express.static(path.join(__dirname, "./front-end/dist")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./front-end/dist/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Connected to backend on port ${PORT}`);
  });
});