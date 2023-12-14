const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.qyn8qvx.mongodb.net/?retryWrites=true&w=majority`)
    console.log("Conexão ao banco feita com sucesso");
  } catch (error) {
    console.log("Erro ao conectar ao banco", error);
  }
}

module.exports = main;
