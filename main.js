/*----- constants -----*/

/*----- cached element references -----*/
let value=document.querySelector(".value");
let neg=document.querySelector(".neg");
let positive=document.querySelector(".positive");
let input=document.querySelector("input");
let countDown=document.querySelector(".countDown")

/*----- app's state (variables) -----*/
value.innerHTML=0;
let newValue=0;

/*----- event listeners -----*/

neg.addEventListener("click", negFunc);
positive.addEventListener("click", positiveFun);

/*----- functions -----*/
function negFunc(evt){
  newValue=newValue-(input.value);
  countDown.textContent="";
  countDown.textContent=newValue;
  redText();
  return parseInt(newValue);
}

function positiveFun(evt){
  newValue=parseInt(newValue)+parseInt(input.value);
  value.textContent="";
  countDown.textContent=newValue;
  redText();
  return parseInt(newValue);
}

function redText(evt){
  if(parseInt(value.innerHTML)<0){
    value.classList.add("red");
  }else{
    value.classList.remove("red");

  }
}
