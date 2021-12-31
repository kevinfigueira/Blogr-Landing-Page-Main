//Select DOm
const menuHamb = document.querySelector(".mobile-menu");
const nav =document.querySelector(".navigation");
const img = document.querySelectorAll(".arrown")

//Events
menuHamb.addEventListener("click", () => {
    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menuHamb.classList.add("active")
    }else{
        menuHamb.classList.remove("active")
    }
})


if(window.screen.width <= 768){
    img.forEach(element => element.setAttribute("src", "assets/images/icon-arrow-dark.svg"))
};

