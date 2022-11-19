const express = require("express");
const app = express();

port = process.env.PORT || 3001;

const Heathrow = require("./data/Heathrow.json");
const Harrow = require("./data/Harrow.json");
const Stratford = require("./data/Stratford.json");

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    SupportedRoutes: ["/Pharmacies", "/Doctors", "/Colleges", "/Hospitals"],
    Version: "0.0.0.1",
    Author: "ShafiekDavids",
  });
});

app.get();

app.listen(port, () => console.log(`Your server is running on ${port}}`));
