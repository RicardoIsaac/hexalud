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
const getStats = asyncHandler(async (req, res, next) => {
    const dnaData = await Dna.find({}, "mutation");
    const count_mutations = dnaData.filter((obj) => obj.mutation === true).length;
    const count_no_mutations = dnaData.length - count_mutations
    const ratio = count_mutations === 0 ? 0 : count_mutations / count_no_mutations;
    res.status(200).json({
        count_mutations,count_no_mutations,ratio

    });
});


module.exports = {
  mutationSearch,getStats
};
