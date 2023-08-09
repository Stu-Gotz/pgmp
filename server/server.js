const express = require("express");
const app = express();
const pool = require("./sql_db");
const cors = require("cors");
const mongo = require("./mongo_db");

const PORT = process.env.PORT || 5500;

// middleware
app.use(cors());
app.use(express.json()); // => req.body
app.use(express.static("public"));

// Repeated functions

async function querySql(statement, values) {
  const query = await pool.query(statement, values);
  const results = query.rows;
  return results;
}

async function handleParams(branch, params) {
  const statement = "SELECT * FROM "+ branch + " WHERE tier=$1 LIMIT 25;";
  const results = await querySql(statement, params);
  console.log(results)
  const output = {
    data: [results],
  };
  return output;
}

/* ROUTES */

// get the top 25 of the tier.
app.get("/apiv1/current/:tier", async (req, res) => {
  try {
    const { tier } = req.params;
    const output = await handleParams("current", [tier]);
    console.log(output)
    return res.json(output);

  } catch (error) {
    console.log(error.message);
  }
});

app.get("/apiv1/previous/:tier", async (req, res) => {
  try {
    const { tier } = req.params;
    const output = await handleParams("previous", [tier]);
    res.json(output);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/apiv1/older/:tier", async (req, res) => {
    try {
      const { tier } = req.params;
      const output = await handleParams("tma", [tier]);
      res.json(output);
    } catch (error) {
      console.log(error.message);
    }
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
