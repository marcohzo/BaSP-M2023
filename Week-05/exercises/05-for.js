console.log('*** EXERCISE 5: FOR');
// Iterar sobre un array
console.log('Exercise 5.A');
var newArr = ["Hola", "que", "tal", "como", "estas"]
for(let i = 0; i < newArr.length; i++){
    alert(newArr[i]);
}
// Iterar sobre un array y convertir la primera letra en mayuscula de cada palabra
console.log('Exercise 5.B');
for(let i = 0; i < newArr.length; i++){
    var word = newArr[i];
    var newWord = word.substring(0, 1).toUpperCase() + word.slice(1);
    alert(newWord);
}
//
console.log('Exercise 5.C');
var sentence = "";
for(let i = 0; i < newArr.length; i++){
    sentence += newArr[i] + " ";
}
alert(sentence);
//Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9.
console.log('Exercise 5.D');
var arr = [];
for (let i = 0; i < 10; i++){
    arr.push(i);
}
console.log(arr);
