for(var i=1; i<=35; i++){
    console.log(i,'allah');
}


for(var b=20; b>=1; b--){
    console.log(b);
}

//summation
var sum=0
for(var i=1; i<=5; i++){//1 2 3 4 5 6 7 8 9 10
    console.log(sum+'+'+i+'='+(sum+i));
    sum+=i //1 3 6 10 15 21 28 36 45 55
}


// 1 to 100 even number summation
var sum = 0
for(var i=1; i<=100; i++){ // 2 4 6 8 10
    if(i%2==0){
        sum+=i // 2 6 12 20 30
        console.log(sum);
    }
}

for(i=1;i<=5;i++){
    console.log('Bangladesh');
}

var sum = 0
for(var i = 1; i<=5; i++){
    sum+=i;
    console.log(sum); //1 3 6 10 15
 }
// console.log(sum); 15

var m = parseInt(prompt('Enter 1st number'))
var n = parseInt(prompt('Enter 2nd number'))
var sum = 0
for(var i = m; i<=n; i++){
    sum=sum+i
}
console.log(sum);

for (var i=1; i<=5; i++){
    var num1 = parseInt(prompt('1st number'));
    var num2 = parseInt(prompt('2nd number'));
    var sum = num1+num2;
    console.log(sum);
}