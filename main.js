
// hide Navbar
const navBar= document.querySelectorAll('.navigation-wrap');
navCollapse= document.querySelector('.navbar-collapse.collapse');

navBar.forEach((a)=>{
    a.addEventListener("click",()=>{
        navCollapse.classList.remove("show")
    })
})

const showSlide=(n)=>{
    let i;
    
        const slides= document.querySelectorAll(".slide1");
if(n>slides.length){slideIndex=1}


if(n<1){slideIndex=slides.length}

for(i =0;i<slides.length;i++){
    slides[i].style.display="none";
}

slides[slideIndex-1].style.display="block";

    }

    let slideIndex=1;

showSlide(slideIndex);


let demos = document.querySelectorAll('.demo');
const plusSlides=(n)=>{
    showSlide(slideIndex+=n);
    
}

const currentSlide=(n)=>{
    showSlide(slideIndex=n);
}

