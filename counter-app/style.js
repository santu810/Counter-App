let dan=document.getElementById("san")
let sun=document.getElementById("van")
let count=0

function increment() {
    count+=1
    dan.textContent=count

}
function save(){
    
    let cstr=count+" - "
    sun.textContent+=cstr
    dan.textContent=0
    count=0
}