// ? Task 2 

// let a = prompt("first number: ")
// let b = prompt("second number: ")

// alert(a ** b);

// Task 3

// sum = 0
// for (let i = 0; i < 1000; i += 11) {
//     sum += i
// }
// alert(sum);

// Task 4

// const array = [4, 7, 32, 24, 95, 64]
// let a = 0
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         array[i] > a
//         a = array[i]
//     }
// }
// alert(a);

// Task 5

// const array = [4, 7, 32, 24, 95, 64]

// let a = 0
// for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//         i > a
//         a = i
//     }
// }
// alert(a);

//  Task 6

// const array = [4, 7, 13, 24, 94, 42, 23, 64, 11]
// let a = 0 
// for (let i = 0; i < array.length; i++) {
//     a=array[i]
//     if () {

//     }

// }

// Task 7

const array = [33, 7, 13, 24, 94, 42, 23, 64, 11]
let a = 0
let b = array[1]
let sum = 0
for (let i = 0; i < array.length; i++) {
    sum += array[i] / array.length
    if (array[i] > a) {
        a = array[i]
    } else if (array[i] < b) {
        b = array[i]
    }

}
alert(a)
alert(b)
alert(sum)