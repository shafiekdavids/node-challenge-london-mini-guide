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
    Author: "Shafiek Davids",
  });
});

//Stratford data

app.get("/:city/pharmacies", function (req, res) {
  const { city } = req.params.city;
  console.log(`GET /${req.params.city}/pharmacies`);
  res.send({ city }.pharmacies);
});

// app.get("/doctors", (req, res) => res.send(Stratford.doctors));
// app.get("/colleges", (req, res) => res.send(Stratford.colleges));
// app.get("/hospitals", (req, res) => res.send(Stratford.hospitals));

app.listen(port, () => console.log(`Your server is running on ${port}}`));
