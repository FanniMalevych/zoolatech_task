const express = require("express");
const axios = require('axios')
const NodeCache = require("node-cache");

const peopleCache = new NodeCache();

const app = express();

app.get("/search-people", async (request, response) => {
    const nameRequestParameter = request.query.name
    const cachedPeople = peopleCache.get(nameRequestParameter)

    if (cachedPeople) {
        return response.send(cachedPeople)
    }
    const people = await axios.get(`https://swapi.dev/api/people/?search=${nameRequestParameter}`)

    const createResponse = async (el) => {
        const planets = await axios.get(el.homeworld)
        return {
            homeworld: planets.data.name,
            name: el.name,
            gender: el.gender
        }
    }

    axios.all(people.data.results.map(el => createResponse(el)))
        .then(data => {
            peopleCache.set(nameRequestParameter, data)
            return response.send(data)
        })
});

exports.app = app;

if (process.env.NODE_ENV !== "test") {
    const PORT = 4001;
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}
