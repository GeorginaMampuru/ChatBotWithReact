const express = require("express");// import express fro
const cors = require("cors");// corse will cxall the servr from any other origin
// call the server from any other origin
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const axios = require("axios");
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "4db89d52-096e-4d93-9e9c-edab9fc839b8" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
  return res.json({ username: username, secret: "gee256..." });
});

app.listen(3001);