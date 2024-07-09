const express = require("express");
const dbConnect = require("./src/config/db");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./src/routes")
const cors = require('cors');

dbConnect();

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));



app.use("/api", routes);

app.get("/", (req, res) => {
    res.json({ message: "API Working" });
});

app.listen(5000, () => {
    console.log("server is running on port 5000");
});


// const rows = 5;

// for (let i = 1; i <= rows; i++) {

//     let spaces = ' '.repeat(rows - i);
//     let stars = spaces + '*'.repeat(2 * i - 1) + spaces;
//     console.log(stars);
// }


// const rows = 5;

// for (let i = rows; i >= 1; i--) {
//     let ee = i - 1;
//     let spaces = ' '.repeat(rows - ee);
//     let stars = spaces + '*'.repeat(i) + spaces;

//     console.log(stars);
// }