
import  {MutationCheck}  from '../utils/DnaMutations.js';
import { NxnCheck } from '../utils/DnaMutations.js';  

  describe("Testing Mutation-Related Functions ", () => {
    test('should return true',async () => {
      const dna=["CTGCCA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA",
    "TCACTG"];
    const response =MutationCheck(dna)
    expect(response).toBe(true);
    });
  
    test('should return false',async () => {
      const dna=["ATGCGA","CAGTGC", "TTATTT", "AGACGG", "GCGTCA",
    "TCACTG"];
    const response =MutationCheck(dna)
    expect(response).toBe(false);
    });
    
    test('Bad 6x6 function should return false',async () => {
        const dna=["ATGCGA","CATGC", "TTATTT", "AGGG", "GCGTCA",
        "TCACTG"];
      const response =NxnCheck(dna)
      expect(response).toBe(false);
      });

      test('6x6 function should return true',async () => {
        const dna=["ATGCGA","CAGTGC", "TTATTT", "AGACGG", "GCGTCA",
      "TCACTG"];
      const response =NxnCheck(dna)
      expect(response).toBe(true);
      });

  });