function calculaDiasAteAoNatal(dia, mes){
    if (dia < 1 || dia > 31){
    return "Por favor introduza um dia entre 1 e 31"}
    else if(mes < 1 || mes > 12){
    return "PPor favor introduza um mês entre 1 e 12."}
    else if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && (dia > 30 || dia < 1)) {
            return "Por favor introduza um dia entre 1 e 30."}
    else if (mes == 2 && (dia > 28 || dia < 1)) {
    return "Por favor introduza um dia entre 1 e 28."}
        if (mes === 12 && dia === 25) {
            return "Hoje é Natal!";}
      else if (mes === 12 && dia > 25) {
            return "Faltam " + (365 - (dia - 25)) + " dias até ao Natal";
        } else if (mes === 1) {
            return "Faltam " + (359 - dia) + " dias até ao Natal";
        } else if (mes === 2) {
            return "Faltam " + (328 - dia) + " dias até ao Natal";
        } else if (mes === 3) {
            return "Faltam " + (300 - dia) + " dias até ao Natal";
        } else if (mes === 4) {
            return "Faltam " + (269 - dia) + " dias até ao Natal";
        } else if (mes === 5) {
            return "Faltam " + (239 - dia) + " dias até ao Natal";
        } else if (mes === 6) {
            return "Faltam " + (208 - dia) + " dias até ao Natal";
        } else if (mes === 7) {
            return "Faltam " + (178 - dia) + " dias até ao Natal";
        } else if (mes === 8) {
            return "Faltam " + (147 - dia) + " dias até ao Natal";
        } else if (mes === 9) {
            return "Faltam " + (116 - dia) + " dias até ao Natal";
        } else if (mes === 10) {
            return "Faltam " + (86 - dia) + " dias até ao Natal";
        } else if (mes === 11) {
            return "Faltam " + (55 - dia) + " dias até ao Natal";
        } else if (mes === 12) {
            return "Faltam " + (25 - dia) + " dias até ao Natal";
    
        }
    }