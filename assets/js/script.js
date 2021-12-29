//Select DOm
const menuHamb = document.querySelector(".mobile-menu");
const nav =document.querySelector(".navigation");

//Events
menuHamb.addEventListener("click", () => {
    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menuHamb.classList.add("active")
    }else{
        menuHamb.classList.remove("active")
    }
})