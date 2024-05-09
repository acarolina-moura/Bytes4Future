// Inicialize uma variável "dataMaisAntiga" com a primeira data do array
let dataMaisAntiga = datas[0];

for (let i = 1; i < datas.length; i++) {
  if (datas[i] < dataMaisAntiga) {
    dataMaisAntiga = datas[i];
  }
}

return dataMaisAntiga;

console.log(dataMaisAntiga(5, 3));
