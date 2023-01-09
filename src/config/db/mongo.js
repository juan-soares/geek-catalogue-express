const mongoose = require("mongoose");

async function connectMongoDB() {
  try {
    mongoose.connect(
      "mongodb+srv://juancarlos:I2alCArb9UbBE838@cluster0.n1pa2.mongodb.net/geekCatalogue",
      function (error) {
        error
          ? console.log(`Não foi possível conectar. Erro: ${error}`)
          : console.log("MongoDB contectado!");
      }
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectMongoDB;
