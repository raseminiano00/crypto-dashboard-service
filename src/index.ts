import express, { Response } from "express";
const app = express();

app.get('/', (req, res: Response) => {
    console.log('get route1');
    res.json(["sample"]);
})

app.listen("4200", () => {
    console.log('Server is running');
})