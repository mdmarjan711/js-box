// if , else, elseif
var a=500

if(a>85){
    console.log("A is Big");
}else{
    console.log("a is small");
}

var marks=59
if(marks>90) {
    console.log('AA');
}else if(marks>80 && marks<=90){
    console.log('AB');
}else if(marks>70 && marks<=80){
    console.log('BB');
}else if(marks>60 && marks<=70){
    console.log('BC');
}else if(marks>50 && marks<=60){
    console.log('CC');
}else if(marks>40 && marks<=50){
    console.log('CD');
}else if(marks>30 && marks<=40){
    console.log('DD');
}else if(marks<=30){
    console.log('FF');
}

var num1 = 10
var num2 = 20
if(num1>num2){
    console.log(num1);
}else if(num1<num2){
    console.log(num2);
}

var num1=111
var num2=22
var num3=3

if(num1>num2 && num1>num3){
    console.log(num1);
}else if(num2>num1 && num2>num3){
    console.log(num2);
}else if(num3>num1 && num3>num2){
    console.log(num3);
}

var a = 23
if(a>0){
    console.log('positive');
}else if(a<0){
    console.log('negative');
}
else{
    console.log('both');
}