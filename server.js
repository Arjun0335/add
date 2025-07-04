// server.js
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 5000;

const FILE = "periods.json";

app.use(cors());
app.use(express.json());

// POST /add - Add new period
app.post("/add", (req, res) => {
  const { startDate, endDate } = req.body;
  const newEntry = { id: Date.now(), startDate, endDate };

  fs.readFile(FILE, "utf8", (err, data) => {
    let history = [];
    if (!err && data) {
      history = JSON.parse(data);
    }
    history.unshift(newEntry);
    fs.writeFile(FILE, JSON.stringify(history, null, 2), (err) => {
      if (err) return res.status(500).send("Failed to write.");
      res.status(200).send("Saved.");
    });
  });
});

// GET /history - Return all periods
app.get("/history", (req, res) => {
  fs.readFile(FILE, "utf8", (err, data) => {
    if (err) return res.status(500).send("Cannot read.");
    res.json(data ? JSON.parse(data) : []);
  });
});

app.listen(PORT, () => {
  console.log(`🟢 Server running on http://localhost:${PORT}`);
});
