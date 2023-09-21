const asyncHandler = require("express-async-handler");
const { NxnCheck, MutationCheck } = require("../utils/DnaMutations");
const Dna = require("../model/dna.model");

const mutationSearch = asyncHandler(async (req, res, next) => {
  try {
    const { dna } = req.body;
    if (!dna) {
      res.status(400);
      throw new Error("Favor de agregar el dna del paciente");
    }
    const nCheck = NxnCheck(dna);
    if (!nCheck) {
      res.status(400);
      throw new Error("Favor de agregar un dna valido");
    }
    const DnaExist = await Dna.findOne({ dnaString: dna.join("") });
    if (DnaExist) {
      res.status(400);
      throw new Error("DNA ya existente");
    }
    const mutation = MutationCheck(dna);
    if (mutation) {
      const DNA = await Dna.create({
        dnaString: dna.join(""),
        mutation,
      });
      res.status(200).json({ message: "Mutacion encontrada." });
    } else {
      const DNA = await Dna.create({
        dnaString: dna.join(""),
        mutation,
      });
      res.status(403).json({ message: "Mutacion no encontrada."});
    }
  } catch (error) {
    next(error);
  }
});



module.exports = {
  mutationSearch
};
