console.log('*** EXERCISE 2: STRINGS');
//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('Exercise 2.A');
var newStr = 'Hola mi nombre es Juan';
var result = newStr.toUpperCase();
console.log(result);
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
console.log('Exercise 2.B');
var newStr2 = 'Me gusta jugar al poker';
var result2 = newStr2.substring(0 ,5);
console.log(result2);
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres.
console.log('Exercise 2.C');
var newStr3 = 'Me gusta jugar al ajedrez';
var result3 = newStr3.substring(newStr3.length - 3);
console.log(result3);
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula..
console.log('Exercise 2.D');
var newStr4 = 'hola juan carlos COMO ESTAS';
var firstLetter = newStr4.substring(0, 1).toUpperCase();
var rest = newStr4.substring(1).toLowerCase();
var result4 = firstLetter + rest;
console.log(result4);
//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable.
console.log('Exercise 2.E');
var newStr5 = 'Me gusta el arte';
var result5 = newStr5.indexOf(" ");
console.log(result5);
//Crear una variable de tipo string con al menos 2 palabras largas. Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula.
console.log('Exercise 2.F');
var newStr6 = 'programando cositas';
var firstWord = newStr6.substring(0, newStr6.indexOf(" "));
var secondWord = newStr6.substring(newStr6.indexOf(" ") + 1);
var firstWordUpperCase = firstWord.substring(0, 1).toUpperCase() + firstWord.substring(1).toLowerCase();
var secondWordUpperCase = secondWord.substring(0, 1).toUpperCase() + secondWord.substring(1).toLowerCase();
var result6 = firstWordUpperCase + " " + secondWordUpperCase;
console.log(result6);