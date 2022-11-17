const express = require("express");

const dbConnect = require("./mongodb");

const mongodb = require("mongodb");
const app = express();

app.use(express.json());

// GET API
app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

// POST API
app.post("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.insertOne(req.body);
  res.send(data);
});

// PUT - UPDATE API
app.put("/:name", async (req, res) => {
  let data = await dbConnect();
  await data.updateOne({ name: req.params.name }, { $set: req.body });
  res.send({ result: "updated" });
});

// DELETE API
app.delete("/:id", async (req, res) => {
  let data = await dbConnect();
  console.log(req.params.id);
  data = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.send(data);
});
app.listen(4500);
