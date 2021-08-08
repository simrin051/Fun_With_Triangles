const inputs= document.querySelectorAll(".angle-input");
const isTrianglebtn= document.querySelector(".is-triangle-btn");
const output= document.querySelector(".output");

function isTriangle()
{
    
   var sum=calculateSumOfAngles(parseInt(inputs[0].value),parseInt(inputs[1].value),parseInt(inputs[2].value));
   if(sum==180)
   {
    console.log("Form a triangle");
    output.style.width='12rem';
    output.innerText = "Hey! can form a triangle";
   }
   else
   {
      output.style.width='13rem';      
    output.innerText = "Oh oh cannot form a triangle";
   }
   
}

function calculateSumOfAngles(angle1,angle2,angle3)
{
const sum=angle1+angle2+angle3;
console.log("Sum "+sum);
return sum;
}

isTrianglebtn.addEventListener("click",isTriangle);
