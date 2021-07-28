const quizForm = document.forms[0];
const qDiv = document.querySelectorAll(".q");
const submitBtn=document.querySelector("#sBtn");
const scoreDiv = document.querySelector(".score");

const correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3" ];

let score = 0;

quizForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = new FormData(quizForm);
    let index=0;
    for(let entry of data){
        if(entry[1] == correctAns[index]){
         qDiv[index].style.backgroundColor = "lightgreen";
         score++;
        }
        else{
         qDiv[index].style.backgroundColor = "pink";
        }
         index++;
     }
     scoreDiv.innerText = score;
     submitBtn.style.display= "none";
});