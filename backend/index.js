const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const questions = require("./questions.json");
app.use(cors());

app.get("/api/questions", (req, res) => {
 res.json(questions);
});

app.listen(PORT, () => {
    console.log(`Servidor backend corriendo http://localhost:${PORT}/api/questions`);
})