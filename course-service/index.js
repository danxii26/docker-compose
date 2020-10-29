const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 8080;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
    res.send({
        "courses": [
            "HTML",
            "CSS",
            "JS",
            "Docker"
        ]
    });
})

app.listen(PORT, HOST);
console.log(`Listening on http://${HOST}:${HOST}`);
