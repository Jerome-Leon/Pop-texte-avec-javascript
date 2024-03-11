const bouton = document.querySelector('#btn');
const bienvenue = document.querySelector('.textContent');

bouton.addEventListener("click", ()=>{
    if (bienvenue.style.display === "block") {
        bienvenue.style.display = "none"; 
    } else {
        bienvenue.style.display = "block"; 
    }
});

const contactOpen = document.querySelector(".contact");
const openForm = document.querySelector(".menu-contact");

contactOpen.addEventListener("click", ()=>{
    if (openForm.style.display === "block"){
        openForm.style.display = "none";
    } else {
        openForm.style.display = "block";
    }
});
