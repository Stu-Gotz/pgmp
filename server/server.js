const express = require('express');
const app = express();
const sqlClient = require("./sql_db"); //stores super secret db info
const cors = require("cors");
const mongoClient = require("./mongo_db");

const PORT = process.env.PORT || 5500;

const collection = mongoClient.collection("users")

// middleware
app.use(cors());
app.use(express.json()); // => req.body
app.use(express.static('public'));

/* ROUTES */

// get the data
app.get("/data/:date/:tier", async (req, res) => {
    try {
        const { date, tier } = req.params;
        const allData = await sqlClient.query(
            "SELECT * FROM smogon_usage_stats WHERE date=$1 AND tier=$2", 
            [date, tier]
            );
        const results = allData.rows;
        const output = { "data": Object.fromEntries(
            results.map(
                item => [item.pokemon, item]
                ))
            };
        res.json(output);
    } catch (error) {
        console.log(error.message);
    };
});
// that's it. It only does a 'get'


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});