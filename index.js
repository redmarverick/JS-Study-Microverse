let nomes = [["John", "Nylbert", "Elienice", "Michael", "Abdias", "Arnold"],
["Brian", "Victor", "Martins", "Jackson", "Muhammad", "Schwarzenegger"],
["M", "M", "F", "M", "M", "M"],];

for (let n = 0; n < 6; n++) {
  if (nomes[2][n] == "F") {
    console.log("Mrs", nomes[1][n]);
  }
  else console.log("Mr", nomes[1][n]);

}
