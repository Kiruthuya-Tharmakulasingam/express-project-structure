// Basic server setup
import express from "express";

const app = express();
const router = express.Router();

const PORT = 5000;

// HTTP method handling
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// users routes
router.get("/users", (req, res) => {
  res.send("This is GET Users...");
});

router.get("/users/:id", (req, res) => {
  res.send("This is GET one users...");
});

router.post("/users/:id", (req, res) => {
  res.send("This is Create Users...");
});

router.put("/users/:id", (req, res) => {
  res.send("This is Update Users...");
});

router.delete("/users/:id", (req, res) => {
  res.send("This is DELETE Users...");
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
