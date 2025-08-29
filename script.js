const menuOpenButton = document.querySelector("#menu-open-button")
menuOpenButton.addEventListener("click" , ()=>{
    document.body.classList.toggle("show-mobile-menu")
})

const closeMobileMenu = document.querySelector("#menu-close-button");

closeMobileMenu.addEventListener("click" , ()=>{
    document.body.classList.toggle("show-mobile-menu")
})

/* slider code ! */


const testimonials = document.querySelectorAll(".testimonial");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".previous-button");

let currentIndex= 0;

const showSlide = (index)=>{
    testimonials.forEach((slide)=>{
      return slide.classList.remove("active")
    });
    testimonials[index].classList.add("active")
}


nextButton.addEventListener("click" , ()=>{
    currentIndex = (currentIndex+1) % testimonials.length;
    showSlide(currentIndex)
})


prevButton.addEventListener("click" , ()=>{
    currentIndex = (currentIndex-1 + testimonials.length) % testimonials.length;
    showSlide(currentIndex)
})
