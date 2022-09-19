const skillBtn = document.querySelector('.skillbtn');
const projectBtn = document.querySelector('.projectbtn');
const expBtn = document.querySelector('.expbtn');
const abtBtn = document.querySelector('.abtbtn');

const skillPage = document.querySelector('.skill');
const projectPage = document.querySelector('.project');
const expPage = document.querySelector('.experience');
const abtPage = document.querySelector('#about');

const allPages = document.querySelectorAll('.about, .skill, .project, .experience')

skillBtn.addEventListener('click', function(){
    abtPage.classList.add('rotate');
    for (const page of [allPages.item(1), allPages.item(2), allPages.item(3)]) {
        page.classList.remove('rotate');
    };
});
abtBtn.addEventListener('click', function(){
    for (const page of allPages) {
        page.classList.remove('rotate');
    };
});
projectBtn.addEventListener('click', function(){
    for (const page of [allPages.item(0), allPages.item(1)]) {
        page.classList.add('rotate');
    };
    for (const page of [allPages.item(2), allPages.item(3)]) {
        page.classList.remove('rotate');
    };
});

expBtn.addEventListener('click', function(){

    for (const page of allPages) {
        page.classList.add('rotate');
    };
    expPage.classList.remove('rotate');

});