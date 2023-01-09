const app = require("./src/app.js");
const port = process.env.API_PORT;

app.listen(port, () => {
  console.log(`Geek-Catalogue-Server conectado na porta ${port}!`);
});
