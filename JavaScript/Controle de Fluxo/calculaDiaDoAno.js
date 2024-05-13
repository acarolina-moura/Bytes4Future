function calculaDiaDoAno(dia, mes) {
    let diasNosMeses = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      let diaDoAno = 0;
      
      if (mes === 2) {
        if (dia >= 1 && dia <= 28) {
          diaDoAno = dia + diasNosMeses[mes - 1];
          return diaDoAno;
        } else {
          return "Por favor introduza um dia entre 1 e 28.";
        }
      } else if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
        if (dia >= 1 && dia <= 31) {
          diaDoAno = dia + diasNosMeses[mes - 1];
          return diaDoAno;
        } else {
          return "Por favor introduza um dia entre 1 e 31.";
        }
      } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        if (dia >= 1 && dia <= 30) {
          diaDoAno = dia + diasNosMeses[mes - 1];
          return diaDoAno;
        } else {
          return "Por favor introduza um dia entre 1 e 30.";
        }
      } else {
        return "Por favor introduza um mês entre 1 e 12.";
      }
    }
    