console.log("*** EXERCISE 6: FUNCTIONS");
//Crear una función suma que reciba dos valores numéricos y retorne el resultado
console.log("Exercise 6.A");
function sum(a, b) {
  return a + b;
}
var result = sum(10, 20);
console.log(result);
//agregarle una validación para controlar si alguno de los parámetros no es un número
console.log("Exercise 6.B");
function sum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert("uno de los dos parametros tiene un error");
    return NaN;
  }
  return a + b;
}
// Validar si un numero es entero
console.log("Exercise 6.C");
function validateInteger(num) {
  return Number.isInteger(num);
}
// Validar si los numeros son enteros, en caso que no sean retornar entero
console.log("Exercise 6.D");
function newSum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert("uno de los dos parametros no es un numero");
    return NaN;
  }
  if (!validateInteger(a) || !validateInteger(b)) {
    alert("El numero no es entero");
    return Math.round(a) + Math.round(b);
  }
  return a + b;
}
// 
console.log("Exercise 6.E");
function validateSum(a, b){
  if (!validateInteger(a) || !validateInteger(b)) {
    alert("El numero no es entero");
    return Math.round(a) + Math.round(b);
  }
  return a + b;
}
function validateSumInteger(a, b){
  if (isNaN(a) || isNaN(b)) {
    alert("uno de los dos parametros no es un numero");
    return NaN;
  }
  return validateSum(a, b);
}
var result = validateSumInteger(20, 10);
console.log(result);
