











// // 1. print number 1 to 10
// for(let i = 1; i<11;i++) {
//   console.log(i)
// }



// //2. peint number 10 to 0 usng while
// let i = 10
// while(i>0){
//   console.log(i)
//   i--
// }



// // even numbers
// for(let i = 1; i<21; i++){
//   if(i%2 === 0){
//     console.log(i)
//   }
// }




// let i = 1;
// while(i<16) {
//   if(i%2 === 1){
//     console.log(i)
//   }
// i++
// }



let sum = 0

for(let i =1; i<101; i++) {
    sum = sum + i
}

console.log("Sum of 1 to 100 is:", sum)







// for(let i = 1; i<201; i++) {
//   if(i === 32) {
//     continue
//   } 
//   console.log(i)
//   }











// let i = 1;
// do {
// console.log(i)
// i++
// }

// while(i<20)





// let i = 1;

// while(i<32) {
//   console.log(i)
//   i++
// }



















// for(let i = 1; i<101; i++) {
//   console.log("print:", i)
// }









// function rps(user, computer) {
//   if(user === computer) return "drow";
//   if(user === "rock" && computer === "scissors") return "user wins"
//   if(user === "scissors" && computer === "paper") return "user wins"
//   if(user === "paper" && computer === "rock") return "user wins"

//   return"computer wins";

// }



// rps("rock", "scissors");











// switch (3) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 3:
//     console.log("three");
//     break
//   case 4:
//     console.log("four");
//     break;
//   default:
//     console.log("default");
// }














// if(1>2) {
//     console.log("false")
// } else {
//     console.log("true")
// }

// const dt = new Date();

// console.log(dt.getFullYear())

// let score = 78;

// let grade = score > 90 ? "A" : score >= 75 ? "B" : socre >= 60 ? "C" : "fail";

// console.log(grade)

// let a = 0;

// if (a) {
//     console.log("truthy");
// } else {
//     console.log("falsy")
// }

// let temp = 35;
// if (!(temp < 30)) {
//     console.log("hot");
// } else {
//     console.log("cold")
// }

// let a = 12

// a = 23
// b = 1

// console.log(a+b)

// let a = 12 === 12
// console.log(a)

// //Object Copy Behavior (Reference vs Value)
// let a = 5;
// let b = a;
// b = 10;

// console.log(a);
// console.log(b)

// // Reference Types – Object & Array
// let person = {
//     name: "Dinesh",
//     age:"22"
// };

// let numbers = [1,2,3,4]

// console.log(typeof person)
// console.log(typeof numbers)

// console.log(Array.isArray(numbers))

// let num = 100;
// let str = "hello";
// let bool = true;
// let und;
// let nul = null;
// let big = 3465235473432463332535354n;
// let sym = Symbol("hey")
// {
//     [Symbol] = "dinesh"
// }

// console.log(typeof num);   // number
// console.log(typeof str);   // string
// console.log(typeof bool);  // boolean
// console.log(typeof und);   // undefined
// console.log(typeof nul);   // object ❗ (JS quirk)
// console.log(typeof big);   // bigint
// console.log(typeof sym);   // symbol

// // Re-declaration vs Re-assignment
// var x = 5;
// var x = 10;

// let y = 15;

// const z = 25;

// //Scope Difference
// function tetVarLetConst() {
//     if (true) {
//         var a = 10;
//         let b = 20;
//         const c = 30;
//     }
//     console.log(a);
//     console.log(b)
//     console.log(c)
// }

// function dinu(str) {
//     return str.split('').reverse().join('');

// }

// const input = 'hello';
// const reversed = dinu(input);
// console.log(reversed)

// // reasignation

// let a = 34;
// a = 4554;

// // let a = 54  //ERROR

// // REVALUATION

// var b = 34;
// var v = 434;
