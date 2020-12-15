const projectsBtn = document.getElementById('projects');
const home = document.getElementById('home');
const aboutMe = document.getElementById('aboutMe');
const contact = document.getElementById('contact');

projectsBtn.addEventListener('click', ()=>{
    window.location.href = 'projects.html'
})

home.addEventListener('click', ()=>{
    window.location.href = 'index.html'
})

aboutMe.addEventListener('click', ()=>{
    window.location.href = 'aboutMe.html'
})

contact.addEventListener('click', ()=>{
    window.location.href = 'contact.html'
})