let bar= document.querySelector(".toggle-bar")
bar.addEventListener("click",toggleMenu);

function toggleMenu(e){
    e.preventDefault();
    let toggle= document.querySelector(".toggle-bar").style.display= "block";
    if(toggle == (document.querySelector(".toggle-bar").style.display= "block")){
        document.querySelector(".toggle-bar").style.display="none";
        document.querySelector(".navbar").style.display="block";
        document.querySelector(".header").style.background="none"
        document.querySelector(".header").style.border="0px solid";
    }
}


let closer = document.querySelector("#close-toggle")
closer.addEventListener("click", closeToggle);

function closeToggle(e){
    e.preventDefault();
    let toggler= document.querySelector(".navbar").style.display= "block"
    if (toggler == (document.querySelector(".navbar").style.display= "block")){
        document.querySelector(".toggle-bar").style.display="block";
        document.querySelector(".navbar").style.display="none";
        document.querySelector(".header").style.background= "rgba(102, 105, 70, 0.19)";
    }
}