let value=document.querySelector(".value");
let neg=document.querySelector(".neg");
let positive=document.querySelector(".positive");
let input=document.querySelector("input");
let fristDiv=document.querySelector(".fristDiv")
value.innerHTML=0;
let newValue=0;

neg.addEventListener("click", negFunc);
positive.addEventListener("click", positiveFun);

function negFunc(evt){
  newValue=newValue-(input.value);
  fristDiv.textContent="";
  fristDiv.textContent=newValue;
  redText();
  return parseInt(newValue);
}

function positiveFun(evt){
  newValue=parseInt(newValue)+parseInt(input.value);
  value.textContent="";
  fristDiv.textContent=newValue;
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
