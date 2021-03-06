import express from "express";
import config from "config";
import { connect, log } from "./utils";
import routes from "./routes";
import { deserializeUser } from "./middleware";

const port = config.get<number>("port");
const app = express();
app.use(express.json());
app.use(deserializeUser);

app.listen(port, async () => {
  log.info("Running");
  await connect();

  routes(app);
});

