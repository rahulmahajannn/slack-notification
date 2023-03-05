const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const a=1;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send({
    message: "hello!",
  });
});

app.post("/slack-notification", (req, res) => {
  const { name, email } = req.body;
  console.log(name, email);
  axios
    .post(
      "https://hooks.slack.com/services/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",
      {
        text: `from ${name} (${email})`,
      }
    )
    .then(() => {
      return res.send("notification sent successfully successfully");
    })
    .catch((err) => {
      return res.send("err while sending notification");
    });
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
