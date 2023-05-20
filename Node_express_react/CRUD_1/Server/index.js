import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";
const app = express();
const port = 5000;
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
/* {
        "name": "Maria",
        "email": "ni@gmail.com",
        "contact": "0902563212",
        "id": "91612ca0-c69c-4396-a461-aa45bff76938"
    },
    {
        "name": "Natisha",
        "email": "ni@gmail.com",
        "contact": "0902563212",
        "id": "abc6f38a-5758-47d4-a63a-906a8d311b13"
    }*/