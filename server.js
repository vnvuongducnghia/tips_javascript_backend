// Khai bao post, khoi dong server

// const {notify} = require("./src/app");
const app = require("./src/app");
const PORT = 3055;
const server = app.listen(PORT, () => {
  console.log("WSV eCommerce start with " + PORT);
});

process.on("SIGINT", () => {
  // Control C thi close
  server.close(() => console.log("Exit Server Express"));
  
});
