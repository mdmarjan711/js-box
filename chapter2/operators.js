//Arithmetic operator
// + - * / % ++ --
var a = 20
var b = 30
console.log(a+b); //50

var c = 20
var d = 20
console.log(c-d); //0

var e = 10
var f = 20
console.log(e*f); //200

var g = 6
var h = 2
console.log(g/h); //3

var i = 5
var j = 2
console.log(i%j); // 1

var k = 6
var l = 2
console.log(k**l); //36

var m = 7
console.log(++m);

var n = 8
console.log(n++); //8
console.log(n); //9

var o = 5
console.log(--o); //4

var p = 7
console.log(p--);//7
console.log(p);//6

// Assignment Operator
var q = 10
var r = 20
q+=r
console.log(q);//30
q-=r
console.log(q);//10
q*=r
console.log(q);//200
q/=r
console.log(q);//10
q%=r
console.log(q);//10
q**=r
console.log(q);


//relational operator
//  >  >=  <  <=  ==  ===  != ! ==
var a1 = 10
var a2 = 5
console.log(a1>a2); //true
console.log(a1<a2); //false

var a3 = 25
var a4 = 30
console.log(a3>a4); //false

var a5 = 15
var a6 = 15
console.log(a5==a6); //true

var a7 = 25
var a8 = 30
console.log(a7==a8); //false

var aq = 45
var aw = '45'
console.log(aq==aw); //true

var aq1 = 45
var aw2 = '45'
console.log(aq1 === aw2); //false Cheak value and datatype 


var ax = 55
var ay = 65
console.log(ax != ay); //true

var a11 = 11
var a12 = 11
console.log(a11 != a12); //false

var a13 = '7'
var a14 = '7'
console.log(a13 !== a14); //false Cheak value and datatype 

var a15 = '8'
var a16 = 9
console.log(a15 !== a16); //true




// logical operator
//&& || !
var a17 = 15
var a18 = 15
console.log(!(a17 == a18)); //false

var a19 = 15
var a20 = 25
console.log(!(a19 == a20)); //ture

var a21=25
var a22=25
console.log(a21==a22 && a22==a21); //true

var a23=45
var a24=56
console.log(a23<a24 && a24>a23);//true

var a25=45
var a26=56
console.log(a25>a26 && a26>a25); //false

var a27=12
var a28=32
console.log(a27>a28 || a28>a27); //true








