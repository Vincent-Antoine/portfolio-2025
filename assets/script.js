// Menu mobile toggle
document.addEventListener("DOMContentLoaded", () => {

  
  const toggleButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  if (toggleButton && menu) {
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  // Initialiser Lenis pour smooth scroll
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  
});

gsap.registerPlugin(SplitText) 

let split = SplitText.create(".vc_principal-texte", { type: "words, chars" });

// now animate the characters in a staggered fashion
gsap.from(split.chars, {
  duration: 0.5, // animation duration
  y: 20,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
stagger: {
		// wrap advanced options in an object
		each: 0.1,
		from: 'start',
		grid: 'auto',
	}});


document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const carousel = document.querySelector('#carousel');
    const section = document.querySelector('#vc_carousel-scroll');
    

    const totalScroll = carousel.scrollWidth - window.innerWidth;

    gsap.to(carousel, {
      x: -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'bottom bottom', // dès que le bas de la section entre
        end: () => "+=" + totalScroll,
        // pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    });

    document.querySelectorAll('[data-project]').forEach(modal => {
    const wrapper = modal.closest('.group');

    wrapper.addEventListener('mouseenter', () => {
      gsap.to(modal, {
        opacity: 1,
        y: 10,
        duration: 0.3,
        ease: "power2.out",
        onStart: () => modal.style.pointerEvents = "auto"
      });
    });

    wrapper.addEventListener('mouseleave', () => {
      gsap.to(modal, {
        opacity: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => modal.style.pointerEvents = "none"
      });
    });
  });
  });