// Probelm 1
// array

var fruits = ['Apple', 'Banana', 'Orange']
//  indexOf      0        1         2 

console.log(fruits.indexOf('Banana'));
//var find = fruits.indexOf('Banana')
//console.log(find);

fruits[1] = 'Mango'
console.log(fruits);

fruits.pop('Orange')
console.log(fruits);

// var a = fruits.pop('Orange')
// console.log(a);

fruits.push('Watermelon')
console.log(fruits);



// Probelm 2
var marks = 65
if(marks >= 80){
    console.log('A grade');
}else if(marks >= 60){
    console.log('B grade');
}else if(marks >= 50){
    console.log('C grade');
}else if(marks >= 40){
    console.log('D grade');
}else{
    console.log('F grade');
}


// Problem 3
var a = 13
var b = 79
var c = 45
if (a > b  && a > c){
    console.log('larger number 13');
}else if(b > a && b > c){
    console.log('larger number 79');
}else{
    console.log('large number 45');
}



var a = 9 
var b = 8
var c = 9
if(a == b || a == c || b == c ){
    console.log('two sides are equal');
}else{
    console.log('not equal');
}
































// Scores
// var scores = {
//     "You": 85,
//     "Tom": 66,
//     "Jane": 95,
//     "Peter": 56,
//     "John": 40
// };



// Function to determine the grade based on score
// function getGrade(score) {
//     if (score >= 80) {
//         return 'A';
//     } else if (score >= 60) {
//         return 'B';
//     } else if (score >= 50) {
//         return 'C';
//     } else if (score >= 40) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }



// Determining and printing grades
// for (var person in scores) {
//     var grade = getGrade(scores[person]);
//     console.log(`${person}'s grade is: ${grade}`);
// }



//answer :
// You's grade is: A
// Tom's grade is: B
// Jane's grade is: A
// Peter's grade is: C
// John's grade is: D

