function formataData(data) {

    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
  
     let diaString;
    let mesString;

    if (dia < 10) {
      diaString = "0" + dia;
    } else {
      diaString = dia.toString();
    }
  
    if (mes < 10) {
      mesString = "0" + mes;
    } else {
      mesString = mes.toString();
    }

    
    return `${diaString}-${mesString}-${ano}`;
  }

  const data = new Date(2022, 3, 1);
  const dataFormatada = formataData(data);
  console.log(dataFormatada); // 01-04-2022
  