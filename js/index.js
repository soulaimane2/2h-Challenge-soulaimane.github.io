console.log("hi")

const TypeWriter = function(txtElement,words,wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIdx = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting=false;

}
// type Method
TypeWriter.prototype.type = function (){
    // current idx of wrd

    const current = this.wordIdx % this.words.length

    const fulltxt = this.words[current];

    // check if deleting

    if(this.isDeleting){
        this.txt = fulltxt.substring(0,this.txt.length - 1)
    }else{
        this.txt = fulltxt.substring(0,this.txt.length + 1)
    }
    this.txtElement.innerHTML = '<span class="txt-typed"> '+ this.txt +' </span>'

    // init typespeed
    let typeSpeed = 300;


    if(this.isDeleting){
        typeSpeed /= 2
    }

    // If word is completed

    if(!this.isDeleting && this.txt === fulltxt){
        typeSpeed = this.wait;

        this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;

        this.wordIdx++;

        typeSpeed = 500;
    }



    setTimeout(() =>  this.type(), typeSpeed)
}
//

document.addEventListener("DOMContentLoaded", init);

function init(){
    const txtElement = document.querySelector('.txt-typed');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement,words,wait);
}






/*********  portfolio */


const fend = document.querySelector('#fend')
const fstack = document.querySelector('#fstack')
const mend = document.querySelector('#mend')
const others = document.querySelector('#others')
const allf = document.querySelector(".allPhoto")
const frontEnd = document.getElementsByClassName('frontEnd')
const fullstack = document.getElementsByClassName('fullstack')
const mobile = document.getElementsByClassName('mobile')
const other = document.getElementsByClassName('others')

fend.addEventListener('click', (e) =>{
    fend.classList.add('active')
    fstack.classList = null;
    mend.classList = null;
    others.classList = null;

    for(var i of allf.children){ 
        i.classList.add("disabled")
    }

    for(var i of frontEnd){
        i.classList.remove('disabled')
    }    
    
})
fstack.addEventListener('click', (e) =>{
    fstack.classList.add('active')
    fend.classList = null;
    mend.classList = null;
    others.classList = null;
    for(var i of allf.children){ 
        i.classList.add("disabled")    }
    for(var i of fullstack){
        i.classList.remove('disabled')
    }
})
mend.addEventListener('click', (e) =>{
    mend.classList.add('active')
    fstack.classList = null;
    fend.classList = null;
    others.classList = null;
    for(var i of allf.children){ 
        i.classList.add("disabled")
    }
    for(var i of mobile){
        i.classList.remove('disabled')
    }
})
others.addEventListener('click', (e) =>{
    others.classList.add('active')
    fstack.classList = null;
    mend.classList = null;
    fend.classList = null;
    for(var i of allf.children){ 
        i.classList.add("disabled")
    }
    for(var i of other){
        i.classList.remove('disabled')
    }
})

document.querySelector(".closedesc").addEventListener('click', e => {
    document.querySelector(".disclamer").classList.add("disabled")
})