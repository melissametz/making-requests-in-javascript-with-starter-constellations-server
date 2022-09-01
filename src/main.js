const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  axios.get(`${BASE_URL}/constellations`).then((response) => {
    const rData = response.data;
    const names = [];
    for (let consetellations of rData) {
      names.push(consetellations.name);
    }
    console.log(names);
  });
}

function getConstellationsByQuadrant(quadrant) {
  axios.get(`${BASE_URL}/constellations`).then((response) => {
    const match = response.data.filter(
      (constellations) => constellations.quadrant === quadrant
    );
    console.log(match);
  });
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
