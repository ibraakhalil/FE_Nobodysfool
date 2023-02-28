(function() {
let item = document.querySelectorAll(".hero .right .slider .item");
let counter = 0;

function slide() {
    item[counter].setAttribute("style","opacity:1;")

    setInterval(() => {
        counter = counter + 1;  
        if (counter > item.length - 1) {
            counter = 0;
        }

        item.forEach(function(x){
            x.setAttribute("style","opacity:0;")
        })
        item[counter].setAttribute("style","opacity:1;")
        
    }, 3000);
}
slide();    
})();

let nav = document.querySelector("header nav");
let hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("click",function(){
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
})













