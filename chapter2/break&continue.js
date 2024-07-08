// Breake statement

while(true){
    var d = Math.floor(Math.random()*10+1)
    if(d == 9){
      console.log('winer winer');
        break
    }else{
      console.log('i got this number',d);
    }
}

for( var a = 1; a<10; a++){
    if(a == 6){
        break
    }
   console.log(a);
}

// continue statement

for( var c = 1; c <= 10; c++){
        if(c == 3 || c == 7){
            continue
        } else {
            console.log(c)
       }
    }
        

// for(;;){
//     var d = Math.floor(Math.random()*10+1)
//     if(d == 9){
//         console.log('win win');
//         break
//     }else{
//         console.log('i got',d);
//     }
// }