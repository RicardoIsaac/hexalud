const regex = /^(?!.*(A{4,}|T{4,}|G{4,}|C{4,}))[ATGC]+$/;
const HorizontalCheck = (DNA) => {
  for (const cadena of DNA) {
    if(!regex.test(cadena)){
      return true
    }
  }
  return false
};

const VerticallCheck = (DNA) => {
  for (let i = 0; i < DNA.length; i++) {
    let string = '';
    for (let j = 0; j < DNA.length; j++) {
      string += DNA[j][i];
    }
    if (!regex.test(string)) {
      return true;
    }
  }
  return false;
}

const DiagonalCheck = (DNA) => {
 let stringD1 = '';
  let stringD2 = '';
  let array = [];

  for (let i = 0; i < DNA.length; i++) {
    stringD1 = stringD1 + DNA[i][i];
    stringD2 = stringD2 + DNA[i][DNA.length - 1 - i];
  }
  array.push(stringD1, stringD2);
  for (const cadena of array) {
        if(!regex.test(cadena)){
      return true
    }
  }
  return false
}

const NxnCheck= (DNA) => {
    if (!Array.isArray(DNA) || DNA.length === 0) {
      return false;
    }
  
    const filas = DNA.length;
    const columnas = DNA[0].length;
  
    for (let i = 1; i < filas; i++) {
      if (DNA[i].length !== columnas) {
        return false;
      }
    }
    if(filas!=columnas){
      return false
    }
   
    return true;
  }

const MutationCheck= (DNA) => {
    const hCheck=HorizontalCheck(DNA)
    const vCheck=VerticallCheck(DNA)
     const dCheck=DiagonalCheck(DNA)   
     if (hCheck || vCheck || dCheck) {
        return true;
      } else {
        return false; 
      }
}


module.exports = {
   NxnCheck,MutationCheck
}