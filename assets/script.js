// Initialiser Lenis smooth scroll et synchronisation avec ScrollTrigger
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Scroll fluide pour les ancres internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      lenis.scrollTo(target);
    }
  });
});

// Menu mobile toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  if (toggleButton && menu) {
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
});

gsap.registerPlugin(SplitText);

let split = SplitText.create(".vc_principal-texte", { type: "words, chars" });

gsap.from(split.chars, {
  duration: 0.5,
  y: 20,
  autoAlpha: 0,
  stagger: {
    each: 0.1,
    from: 'start',
    grid: 'auto',
  }
});

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
      start: 'bottom bottom',
      end: () => "+=" + totalScroll,
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

gsap.from("#vc_header", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#vc_header",
    start: "top top",
    toggleActions: "play none none none"
  }
});



gsap.utils.toArray(".vc_section").forEach(section => {
  gsap.set(section, { opacity: 0, x: -100 });

  ScrollTrigger.create({
    trigger: section,
    start: "top 80%",
    end: "bottom 20%",
    onEnter: () => {
      gsap.to(section, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      });
    },
    onLeave: () => {
      gsap.to(section, {
        x: -100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in"
      });
    },
    onEnterBack: () => {
      gsap.to(section, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      });
    },
    onLeaveBack: () => {
      gsap.to(section, {
        x: -100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in"
      });
    },
    toggleActions: "play none none none",
    markers: false // mets à true pour tester les triggers
  });
});


