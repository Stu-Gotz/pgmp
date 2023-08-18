const express = require("express");
const app = express();
const pool = require("./sql_db");
const cors = require("cors");
const {mongo, userModel} = require("./mongo_db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const PORT = process.env.PORT || 5500;

// middleware
app.use(cors());
app.use(express.json()); // => req.body
app.use(express.static("public"));

// Repeated functions

async function querySql(statement, values) {
  const query = await pool.query(statement, values);
  console.log(query);
  const results = query.rows;
  return results;
}

async function handleParams(branch, params) {
  const statement = "SELECT * FROM " + branch + " WHERE tier=$1 LIMIT 25;";
  const results = await querySql(statement, params);
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
    console.log(output);
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

// User database interactions

app.post("/apiv1/login", async (req, res) => {
  //Get the login creds from the request
  console.log(req.body);
  const { username, password } = req.body;
  console.log(`username is ${username}, password is ${password}`);
  try {
    //Query the database, similar to above, just searching a different table
    const loginQuery =
      "SELECT id, role, mongo_id, username, password FROM users WHERE username = $1";
    const queryRes = await pool.query(loginQuery, [username]);
    const userData = queryRes.rows[0];
    console.log(userData);

    //if it doesn't return a userData, send 404 (Not Found)
    if (!userData) {
      res.sendStatus(404);
    }

    const storedPass = userData.password;
    console.log(`stored password is: ${storedPass}`);
    const validPassword = await bcrypt.compare(password, storedPass);
    console.log(validPassword);

    // if passwords don't match, send 403 (Unauthorised)
    if (!validPassword) {
      res.sendStatus(403);
    }

    const userProfile = await userModel.findById(userData.mongo_id).exec();
    console.log(userProfile);

    //sign token (This isn't used in this application as we aren't using cookies,
    // but in a real world scenario, or possibly in the future, it might be useful)
    const token = jwt.sign(
      {
        username: userData.username,
        role: userData.role,
        mongo_id: userData.mongo_id,
      },
      "secretkey"
    );
    res.json({
      username: userData.username,
      role: userData.role,
      mongo_id: userData.mongo_id,
      profile: userProfile,
      token,
    });
    // All good, send 200 (Success)
    // res.send(200).json();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// app.post("/apiv1/userData/", verifyToken, async(req, res) => {
//   jwt.verifyToken(req.token, "secretKey", (err, authData) => {
//     if (err) {
//       res.sendStatus(403); //denied access
//     } else {
//       res.json({
//         loggedIn: true,
//         authData,
//       })
//     }
//   })
// })

// Verifys the token on login, if
// function verifyToken(req, res, next){
//   const bearerHeader = req.headers['authorization'];
//   if (typeof bearerHeader !== 'undefined') {
//     const bearerToken = bearerHeader.split(' ')[1];

//     req.token = bearerToken;
//     next()
//   } else {
//     res.sendStatus(403);
//   }
// }

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
