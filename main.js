const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle){
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

// Alterar header da página quando houver scroll



function ChangedHeaderWhenScroll(){
  const header = document.querySelector("#header")
  const navHeight = header.offsetHeight
  const backToTopButton = document.querySelector('.back-to-top') 

  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }

  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}


const Swipper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
})

// Scroll Review
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
   #home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
`, { interval: 100})

// voltar para o topo


// window.addEventListener('scroll', function() {
//   if(window.scrollY >= 560) {
//     backToTopButton.classList.add('show')
//   } else {
//     backToTopButton.classList.remove('show')
//   }
// })

window.addEventListener('scroll', function() {
  ChangedHeaderWhenScroll()
})


