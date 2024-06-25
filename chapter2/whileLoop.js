var i = 1 // whileloop syntax
while (i<=10) {
    console.log(i,'Bangladesh');
    i++
}



var isRunning = true
while (isRunning) {
    var num = Math.floor(Math.random()*10+1)
    if (num==9) {
        console.log('winner winner');
        isRunning = false
    }else{
        console.log('you have got '+num);
    }
}





var i = 1
var sum = 0
while(i<=100){
    if(i%3==0 && i%5==0){
        sum+=i
    }
    i++
}
console.log(sum);//315