function calculaDiaDoAno(dia, mes) {
    let diasNosMeses = [0, 31, 59, 90, 120, 151, 181, 212, 242, 273, 303, 334];
    let diaDoAno = 0;
    if (mes < 1 || mes > 12) {
      return `Por favor introduza um mês entre 1 e 12. Mês inválido: ${mes}`;
    }
    if (dia <= 0) {
      return "Por favor introduza um dia válido (deve ser um número maior que zero).";
    }
  
    if (mes === 2) {
      if (dia >= 1 && dia <= 28) {
        diaDoAno = dia + diasNosMeses[mes - 1] - 1;
      } else {
        return "Por favor introduza um dia entre 1 e 28.";
      }
    } else {
      for (let i = 1; i < mes; i++) {
        diaDoAno += diasNosMeses[i];
      }
      if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        if (dia >= 1 && dia <= 30) {
          diaDoAno += dia;
        } else {
          return "Por favor introduza um dia entre 1 e 30.";
        }
      } else {
        if (dia >= 1 && dia <= 31) {
          diaDoAno += dia;
        } else {
          return "Por favor introduza um dia entre 1 e 31.";
        }
      }
    }
    return diaDoAno;
  }
  