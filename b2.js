var angleOne=document.querySelector("#a1");
var angleTwo=document.querySelector("#a2");
var angleThree=document.querySelector("#a3");

var outp=document.querySelector("#output");

function calcHypo(){
    var angOne=parseInt(angleOne.value);
    var angTwo=parseInt(angleTwo.value);
    var total=Math.pow(angOne,2)+Math.pow(angTwo,2)
    
    total=Math.sqrt(total);
    // console.log(Math.pow(angOne,2)+Math.pow(angTwo,2))
    if(isNaN(angOne)||isNaN(angTwo)){
        alert("Fill Values");
    }
    else if(angOne<0||angTwo<0){
        alert("negative values not allowed")
    }
    else{
        outp.innerHTML="Your Answer is : " + total.toFixed(3);
    }
    
    // console.log(angTwo);
    // console.log(angOne);
}