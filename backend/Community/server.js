const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const postRouter = require("./routes/Routes");
const connectToDB = require("./config/connect");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("HELLO");
});

app.use("/posts", postRouter);

async function launch() {
  try {
    await connectToDB(process.env.DB_URL);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch(err) {
    console.log(err);
  }
}

launch();
