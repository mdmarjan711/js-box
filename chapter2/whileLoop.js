var i = 1
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

// Do while loop
var j = 1
do{
    console.log('bdt');
    j++
}while(j>10)