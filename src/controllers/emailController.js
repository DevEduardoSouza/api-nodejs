const Email = require("../models/Email");

const emailController = {
  create: async (req, res) => {
    try {
      const email = {
        email: req.body.email,
        hashedPassword: req.body.hashedPassword,
      };

      const response = await Email.create(email);

      res.status(201).json({ response, msg: "Email criado com sucesso!" });
    } catch (error) {
      console.log(`Error ao criar um email: ${error}`);
    }
  },
  getAll: async (req, res) => {
    try {
      const emails = await Email.find();
      res.json(emails);
    } catch (error) {
      console.log(`Error ao buscar todos os emails: ${error}`);
    }
  },
  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const emails = await Email.findById(id);
      res.json(emails);
    } catch (error) {
      console.log(`Error ao buscar o email: ${error}`);
    }
  },
};

module.exports = emailController;
