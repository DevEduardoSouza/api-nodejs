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
      const email = await Email.findById(id);

      if (!email) {
        res.status(404).json({ msg: "Email não encontrado" });
        return;
      }

      res.json(email);
    } catch (error) {
      console.log(`Error ao buscar o email: ${error}`);
      res.status(404).json({ msg: "formato de ID não válido" });
    }
  },
  getByEmail: async (req, res) => {
    try {
      const userEmail = req.params.email;
      const email = await Email.findOne({ email: userEmail });

      if (!email) {
        res.status(404).json({ msg: "Email não encontrado" });
        return;
      }

      res.json(email);
    } catch (error) {
      console.log(`Error ao buscar o email: ${error}`);
      res.status(500).json({ msg: "Erro interno do servidor" });
    }
  },
  deleteById: async (req, res) => {
    try {
      const id = req.params.id;
      const email = await Email.findById(id);

      if (!email) {
        res.status(404).json({ msg: "Email não encontrado" });
        return;
      }

      const deletedEmail = await Email.findByIdAndDelete(id);

      res
        .status(200)
        .json({ deletedEmail, msg: "email deletado  com sucesso" });
    } catch (error) {
      console.log(`Error ao buscar o email: ${error}`);
      res.status(404).json({ msg: "formato de ID não válido" });
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const email = {
        email: req.body.email,
        hashedPassword: req.body.hashedPassword,
      };

      const updatedEmail = await Email.findByIdAndUpdate(id, email);

      if (!updatedEmail) {
        res.status(404).json({ msg: "Email não encontrado" });
        return;
      }

      res.status(200).json({ email, msg: "email atualizado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = emailController;
