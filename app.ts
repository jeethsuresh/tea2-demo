import * as express from "express";

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log("Test Express server with Typescript")
});

export let App = app;