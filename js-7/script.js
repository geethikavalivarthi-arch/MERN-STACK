let boxes=document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor="skyblue";
document.getElementById("yellow").style.backgroundColor="yellow";
document.querySelector(".box").style.backgroundColor="lavender";
console.log (document.querySelectorAll(".box"));
document.querySelectorAll(".box")[1].style.backgroundColor="lightgreen";
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="skyblue";

    
})