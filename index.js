const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Including the Tabel - Schema :
const db = require("./models");

// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\/
// Routers :

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const todolist_Items_Router = require("./routes/todolist_Items");
app.use("/todolist_Items", todolist_Items_Router);

// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\/
// Starting the Server & Connecting to the DB:

db.sequelize.sync().then(() => {
  const port = 3001;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
