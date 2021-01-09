import express from "express";
import ItemRouter from "./routes/itemRouter";
import "reflect-metadata";

const createServer = () => {
  const app: express.Application = express();
  app.use(express.json());
  app.use("/item", ItemRouter);
  return app;
};

export default createServer;
