function calculaAreaSuperficiePiramidePentagonal(ladodabase, altura) {
    if (ladodabase < 0 || altura < 0) return "Por favor introduza valores positivos."
    a = ladodabase / (2 * Math.tan(Math.PI/5))
    h = Math.sqrt(a**2 + altura**2)
    areaTri = (ladodabase * h) / 2
    areaPenta = (ladodabase * 5) * (1/2) * a
    return Math.round(areaTri * 5 + areaPenta)
}