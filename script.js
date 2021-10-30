const sizeUp = document.querySelector(".sizeUp")
const sizeDown = document.querySelector(".sizeDown")
const color = document.querySelector(".color")
const p = document.querySelector(".text p")
const step = 5
let currentFontSize = parseFloat(window.getComputedStyle(p, null).fontSize);

const fun1 = ()=>{

    if(currentFontSize<66){
        currentFontSize=step+currentFontSize
    
    p.style.fontSize= currentFontSize+"px"}else{
        p.style.fontSize= currentFontSize +"px"
    }
}

const fun2 = ()=>{

    if(currentFontSize>16){
        currentFontSize-=step
    
    p.style.fontSize= currentFontSize+"px"}else{
        p.style.fontSize= currentFontSize +"px"
    }
}

const fun3 = () =>{
    let a = Math.floor(Math.random() *255)
    let b = Math.floor(Math.random() *255)
    let c = Math.floor(Math.random() *255)
    p.style.color ="rgb("+a+', '+b+", "+c+")"
}

sizeUp.addEventListener("click", fun1)
sizeDown.addEventListener("click", fun2)
color.addEventListener("click",fun3)






