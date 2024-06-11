// Switch Statement
var dates = new Date();
var today = dates.getDay();
switch (today) {
    case 0:
        console.log('sunday');//sunday
        break;
    case 1:
        console.log('monday'); //monday
        break;
    case 2:
        console.log('tuesday'); //tuesday
        break;
    case 3:
        console.log('wednesday');//wednesday
        break;
    case 4:
        console.log('thursday');//thursday
        break;
    case 5:
        console.log('friday');//friday
        break;
    case 6:
        console.log('saturday');//saturday

    default:console.log('no day');
}

var a="macbook"
switch(a){
    case "sam":
        console.log("samsung");
        break;
    case "ava":
        console.log("lava");
        break;
    case "kai":
        console.log("mi");
        break;
    case "panko":
        console.log("tecno");
        break;
    case "macbook":
        console.log("apple");
        break;
    default: console.log("not buying");

}
