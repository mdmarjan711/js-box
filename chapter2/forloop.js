for(var i=1; i<=35; i++){
    console.log(i,'allah');
}


for(var a=20; a>=1; a--){
    console.log(a);
}

//summation
var sum=0
for(var i=1; i<=10; i++){//1 2 3 4 5 6 7 8 9 10
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

    