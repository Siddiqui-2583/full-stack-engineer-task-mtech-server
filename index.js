import express from "express";
import routes from "./routes/routes.js";
import postgres from "./config/postgresql_connection.js";
import http from "http"
const app = express();



app.use("/", routes);
app.use("/test", (req, res) => {
  res.send("success");
});



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