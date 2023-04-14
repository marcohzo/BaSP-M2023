console.log('*** EXERCISE 4: IF-ELSE');
//Crear un número aleatorio entre 0 y 1
console.log('Exercise 4.A');
var numRandom = Math.random();
if(numRandom >= 5){
    alert("Greater than or equal to 0,5")
} else {
    alert("Lower than 0,5")}
//Crear una alerta dependiendo de la edad de la persona.
console.log('Exercise 4.B');
var Age = 23;
if(Age < 2){
    alert("Bebe");
} else if (Age >= 2 && Age <= 12) {
    alert("Niño")
} else if (Age >= 13 && Age <= 19) {
    alert("Adolescente")
} else if (Age >= 20 && Age <= 30) {
    alert("joven")
} else if (Age >= 31 && Age <= 60) {
    alert("Adulto")
} else if (Age >= 61 && Age <= 75) {
    alert("Adulto mayor")
} else if (Age > 75) {
    alert("Anciano")
} 