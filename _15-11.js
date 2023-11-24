// dom manpulation
let res=document.querySelector("h1")

// change the content of html element
res.innerHTML='<p>good morning</p>'

function content() {
    res.innerText='<p>blah blah</p>'
    
}
// changing the atrributr value
let image=document.querySelector("img")

function change(){
    image.src=""
}

let dark=document.querySelector("button")

function theme(){
    document.body.style.background="black"
    document.body.style.color="white"
}

let cont=document.getElementById("container")
let text=document.getElementById("text")

function wish(){
   let head=document.createElement('h1')
   text.appendChild(head)
   head.innerText='blah blah'
}

function del(){
    cont.removeChild(text)
}


function replace(){
    let rep=document.getElementById("food").children[0]
    
    let newNode=document.createTextNode("apple")

    rep.replaceChild(newNode,list.childNodes[0])

}