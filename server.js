// http request (frontend, fetch(http:3001)) -> server.js
// -> app.js (figures out where to route)
// -> controller (handling the logic for the response)

// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
