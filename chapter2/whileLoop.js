var i = 1
while (i<=10) {
    console.log(i,'Bangladesh');
    i++
}

var isRuning = true
while (isRuning) {
    var num = Math.floor(Math.random()*10+1)
    if (num==9) {
        console.log('winer winer');
        isRuning = false
    }else{
        console.log('you have got '+num);
    }
}

// Do while loop