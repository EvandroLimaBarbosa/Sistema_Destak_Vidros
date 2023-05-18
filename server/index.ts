import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/todos", async (req, res) => {
  const todos = await prisma.clientes.findMany({
  });

  res.json(todos);
});

app.post("/clientes", async (req, res) => {
  const { name } = req.body;

  const todo = await prisma.clientes.create({
    data: {
      name
    },
  });

  return res.json(todo);
});

app.get("/clientes/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await prisma.clientes.findUnique({
    where: { id },
  });

  return res.json(todo);
});

app.put("/clientes/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await prisma.clientes.update({
    where: { id },
    data: req.body,
  });

  return res.json(todo);
});

app.delete("/clientes/:id", async (req, res) => {
  const id = req.params.id;
  await prisma.clientes.delete({
    where: { id },
  });

  return res.send({ status: "ok" });
});

app.get("/", async (req, res) => {
  res.send(
    `
  <h1>clientes REST API</h1>
  <h2>Available Routes</h2>
  <pre>
    GET, POST /todos
    GET, PUT, DELETE /todos/:id
  </pre>
  `.trim(),
  );
});

app.listen(Number(port), "0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`);
});