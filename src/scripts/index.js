/**
 *
 * Scopes
 *
 * var, let, const
 *
 * function
 *
 * typeof
 *
 * Array
 *
 * object
 *
 */

// const x = 'hola que tal';
// let a;

// let y = 5;

// y = 'hola!!!!';

// a = 'hola';

// console.log(y);

// let r = x + ' como estas?';

// console.log(x); // 90,

let r = 99;

//console.log(r);

// function mult(n1, n2) {
//   return n1 * n2;
// }

// function sum(number1, number2) {
//   // Argumentos
//   //console.log(arguments);
//   let total;
//   if (number1 > number2) {
//     total = number1 + number2 + 3 + mult(number1, number2);
//   } else {
//     total = number1 + number2 + 3;
//   }
//   return total;
// }

// console.log(sum(1, 40)); // se ejecuta el else

// console.log(sum(40, 1)); // se ejecuta el body del if

let sumTotal = sum(11, 98); // Parametros
console.log(sumTotal);

sum(14, 112);

function thisIsMyName(name, lastName) {
  return name + ' ' + lastName;
  console.log('Lo lee el interprete???');
}

console.log(thisIsMyName('Yosef', 'Maldonado'));

// // ---------------------------------

// let number2 = 11;
// let number3 = 98;

// let total1 = number2 + number3 + 3;

// console.log(total1);

// // ---------------------------------

// let number4 = 14;
// let number5 = 122;

// let tota2 = number4 + number5 + 3;

// console.log(tota2);

function mult(n1, n2) {
  return n1 * n2;
}

function sum(number1, number2) {
  if (number1 > number2) {
    return number1 + number2 + 3 + mult(number1, number2);
  }
  return number1 + number2 + 3;
}

console.log(sum(1, 40)); // se ejecuta lo que esta afuera

console.log(sum(40, 1)); // se ejecuta el body del if
