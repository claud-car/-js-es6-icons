const bici = [
  {
    nome:"lele",
    peso:4
  },
  {
    nome:"lala",
    peso:2
  },
  {
    nome:"lolo",
    peso:6
  },
  {
    nome:"lulu",
    peso:8
  }
]

let min = bici[0].peso;

bici.forEach((item) => {

  if (item.peso < min) {

    min = item.peso;
  }
});

let bicipiccola = bici.filter((item) => item.peso == min);
console.log(`La bici più piccola è ${bicipiccola[0].nome} e il peso è di ${min}Kg.`);
