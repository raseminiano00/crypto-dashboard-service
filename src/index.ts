import express from "express";
import { Routes } from "./routes/index";

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.listen("4200", () => {
    const routes = new Routes(app);

    routes.initializeRoutesInstances();
    console.log('Server is running');
})



