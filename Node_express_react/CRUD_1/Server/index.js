import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";
import dotenv from  'dotenv'
dotenv.config()
const app = express();
const port = process.env.PORT
app.use(bodyParser.json());
app.use("/", userRoutes);
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.all("*", (req, res) => {
  res.send("The router does not exist");
});
app.listen(port, () => {
  console.log(`Server is listening on port: http://localhost:${port}`);
});