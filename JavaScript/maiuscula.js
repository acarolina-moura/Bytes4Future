function formataString(string) {
    return string.split('').map(letra => 
        letra === letra.toUpperCase() ? letra.toLowerCase() : letra.toUpperCase()
    ).join('');
}