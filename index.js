const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu_btn");
const cancleBtn = document.querySelector(".cancle_btn");


menuBtn.onclick = () =>{
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");

}
cancleBtn.onclick = () =>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}

window.onscroll = () =>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
}