const areabtn= document.querySelector(".area-btn");
const output= document.querySelector(".output");
const inputs=document.querySelectorAll(".input");
function areaOfTriangle()
{
 console.log("Inside area of triangle");  
const area=(1/2)*Number(inputs[0].value)*Number(inputs[1].value);
console.log("Area "+area);
output.innerText="Area: "+area;
output.style.width='12rem';
output.style.padding='1rem';
}
areabtn.addEventListener("click",areaOfTriangle);