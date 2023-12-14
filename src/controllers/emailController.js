const Email = require("../models/Email");


const emailController = {
  create: async (req, res) => {
    try {
      const email = {
        email: req.body.email,
        hashedPassword: req.body.hashedPassword,
      };
      console.log("Opa");
  
      const response = await Email.create(email)
        .then((resultado) => {
          console.log("Registro criado com sucesso:", resultado);
        })
        .catch((error) => console.log("Erro ao criar registro:", error));

      res.status(201).json({ response, msg: "Email criado com sucesso!" });
    } catch (error) {
      console.log(`Error ao criar um email: ${error}`);
    }
  },
};

module.exports = emailController;
