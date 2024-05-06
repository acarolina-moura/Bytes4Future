function concatenarStrings(name, apelido) {
  // return name + " " + apelido;
  return `${name} ${apelido}`;
}
const fullName = concatenarStrings("Ana", "Carolina");
console.log(fullName);