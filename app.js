const express = require("express");
const ejs = require("ejs");

const app = express();

PORT = 5099;

app.set("view engine", "ejs");
app.set("views", "views");

const homeRoutes = require("./app/routes/home.routes");
app.use(homeRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
