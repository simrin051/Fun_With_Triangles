const inputs=document.querySelectorAll(".side-input");
const output=document.querySelector(".output");
const hypotenusebtn=document.querySelector(".hypotenuse-btn");
function calcHypotenuse()
{
var sumOfSquares=inputs[0].value**2+inputs[1].value**2;
var hypotenuse=Math.sqrt(sumOfSquares);
console.log("Hypotenuse "+hypotenuse);
output.innerText="Ans: "+hypotenuse;
output.style.width='12rem';
output.style.height='1rem';
output.style.padding='1rem';
}




hypotenusebtn.addEventListener("click",calcHypotenuse);