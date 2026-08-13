const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Welcome to Empower IT Backend 🚀");
});

app.get("/about", (req, res) => {
    res.send("Welcome to the About Page");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});