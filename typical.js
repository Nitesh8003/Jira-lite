let input_box=document.querySelector("input")
let btn=document.querySelector("button")
let output=document.querySelector(".output")

btn.addEventListener("click",Calculatetip)

function Calculatetip(){
    let value=input_box.value;
    let tip=value*0.2;
    output.innerText=`You should tip ${tip}`
}
