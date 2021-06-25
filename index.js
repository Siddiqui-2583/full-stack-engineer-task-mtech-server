import express from "express";
import routes from "./routes/routes.js";
import postgres from "./config/postgresql_connection.js";
import http from "http"
import cors from "cors";

const app = express();
app.use(cors());


app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/", routes);

const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running at port ${PORT}'`));

postgres
  .connect()
  .then(() => {
    console.log("PostgreSQL connected");
    const server = http.createServer(app);

    app.listen(PORT, () => {
      console.log("Server listening on PORT: " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });