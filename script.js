const toggle=document.getElementById('menu-ham-toggle');
const navbar=document.getElementById('navbar');

toggle.addEventListener('click',()=>{
    navbar.classList.toggle('show');
})