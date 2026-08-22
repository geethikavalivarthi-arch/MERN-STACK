let button=document.getElementById("btn")
button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b>I have creacted successfully</b>"
})
button.addEventListener("click",()=>{
    alert("Dont hack us by right click please")
})

document.addEventListener("keydown",e=>{
    console.log(e, e.key,e.keyCode)
})
