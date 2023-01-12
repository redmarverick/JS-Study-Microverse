function pairElement(str) {
  let dna=[];
  for(let i=0;i<str.length;i++)
  {
    switch(str[i]) {
      case "A":
        dna.push(["A","T"]);
        break;
      case "T":
        dna.push(["T","A"]);
        break;
      case "G":
        dna.push(["G","C"]);
        break;
      case "C":
        dna.push(["C","G"]);
        break;
      default:
    }
  }
  //console.log(dna);
  return dna;
}

pairElement("ATCGA");