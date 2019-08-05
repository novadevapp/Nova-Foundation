const app = require("./app");

app.listen(app.get("PORT"), () => {
  console.log("The magic is happening on port", app.get("PORT"));
});