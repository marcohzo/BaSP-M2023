console.log('*** EXERCISE 3: ARRAYS');
// Mostrar los meses 5 y 11.
console.log('Exercise 3.A');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var result = months[4] + " " + months[10];
console.log(result);
// Ordenar el array alfabeticamente
console.log('Exercise 3.B');
var newMonths = months.slice();
var result2 = newMonths.sort();
console.log(result2);
// Agregar un elemento al principio y al final del array
console.log('Exercise 3.C');
months.unshift('primerMes');
months.push('ultimoMes');
console.log(months);
// Remover el primer y ultimo elemento
console.log('Exercise 3.D');
months.shift();
months.pop();
console.log(months);
//Invertir el orden del array
console.log('Exercise 3.E');
var months5 = months.slice();
var result5 = months5.reverse();
console.log(result5);
// Unir todos los elementos del array en un único string donde cada mes este separado por un guión
console.log('Exercise 3.F');
var months6 = months.slice();
var result6 = months6.join("-");
console.log(result6);
// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
console.log('Exercise 3.G');
var result7 = months.slice(4, 11);
console.log(result7);