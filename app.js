// Basic server setup
import express from "express";

import userRoutes from "./routes/userRoutes.js";

const app = express();

const PORT = 5000;

// HTTP method handling
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
