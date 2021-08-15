var angleOne=document.querySelector("#a1");
var angleTwo=document.querySelector("#a2");
var angleThree=document.querySelector("#a3");

var outp=document.querySelector("#output");



function calc(){
    var angOne=parseInt(angleOne.value);
    var angTwo=parseInt(angleTwo.value);
    var angThree=parseInt(angleThree.value);

    console.log(angThree+angTwo+angOne);
    
    if(isNaN(angOne)||isNaN(angTwo)||isNaN(angThree)){
        alert("Fill Values");
    } 
   else{
       if(angThree+angTwo+angOne==180){
           outp.innerHTML="POSSIBLE"
       }
       else{
           outp.innerHTML="IMPOSSIBLE(In voice of thanos)"
       }
   }

    
}

