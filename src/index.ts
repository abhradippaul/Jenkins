import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Sample route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world! updated for jenkins polling");
});

app.get("/api/users", (req: Request, res: Response) => {
  res.json([
    { id: 1, name: "Abhra" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);
});

app.get("/api/status", (req: Request, res: Response) => {
  res.json({
    status: "Server is running",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/products", (req: Request, res: Response) => {
  res.json([
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Smartphone", price: 800 },
    { id: 103, name: "Tablet", price: 400 },
  ]);
});

// Environment variables
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
