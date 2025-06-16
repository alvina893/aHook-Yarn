const mongoose = require("mongoose");

const url =
  "mongodb+srv://alvinaleony293:LN5WbjifvJo15jw6@ahookandyarn.tldem0j.mongodb.net/?retryWrites=true&w=majority&appName=aHookandYarn";
let PORT = 3000;

mongoose.set("strictQuery", true);
mongoose
  .connect(url, {})
  .then(() => {
    console.log("connect successfully");
    console.log("Listening to port -> " + PORT);
  })
  .catch((err) => {
    console.log("no connection");
  });
