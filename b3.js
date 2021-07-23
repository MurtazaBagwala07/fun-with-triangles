var b=document.querySelector("#base");
var h=document.querySelector("#height");
var outp=document.querySelector("#output");

var one = document.querySelector("#a");
var two = document.querySelector("#b");
var three = document.querySelector("#c");

var sideOne = document.querySelector("#sA");
var sideTwo = document.querySelector("#sB");
var angleOne = document.querySelector("#aA");

function calculateBH(){
    var tBase=b.value;
    var tHeight=h.value;

    var result =0.5*tBase*tHeight;
    outp.innerHTML=result;
    
}

function calculateThree(){
    var sideA = parseInt(one.value);
    var sideB = parseInt(two.value);
    var sideC = parseInt(three.value);

    var perimeter = sideA+sideB+sideC;
    var total = perimeter*(perimeter-sideA)*(perimeter-sideB)*(perimeter-sideC);
    console.log(total);
    var ans = Math.sqrt(total);

    outp.innerHTML=ans;
}

function calculateSA(){
    var i=sideOne.value;
    var j=sideTwo.value;
    var k=angleOne.value;
    
    var angleToRadian = k * 3.14 /180;

    var result = i * j * Math.sin(angleToRadian);
    console.log(i);
    outp.innerHTML = result;

}