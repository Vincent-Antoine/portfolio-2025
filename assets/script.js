// Lenis smooth scroll + ScrollTrigger
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

// Scroll fluide pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) lenis.scrollTo(target);
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

  // Carrousel infini
  const carousel = document.getElementById("carousel");
  const section = document.getElementById("vc_carousel-scroll");
  let isPaused = false;
  const scrollSpeed = 1.5;

  // Dupliquer les éléments pour effet infini
  carousel.innerHTML += carousel.innerHTML;

  function autoScroll() {
    if (!isPaused) {
      section.scrollLeft += scrollSpeed;
      if (section.scrollLeft >= carousel.scrollWidth / 2) {
        section.scrollLeft = 0;
      }
    }
    requestAnimationFrame(autoScroll);
  }

  autoScroll();

  // Pause sur hover
  carousel.querySelectorAll("img").forEach(img => {
    img.addEventListener("mouseenter", () => isPaused = true);
    img.addEventListener("mouseleave", () => isPaused = false);
  });

  // Modales projets
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

  // Custom cursor suivi souris
  const body = document.body;
  const cursor = document.querySelector('.custom-cursor');
  document.querySelectorAll('#vc_carousel-scroll img').forEach(img => {
    img.addEventListener('mouseenter', () => body.classList.add('cursor-hidden'));
    img.addEventListener('mouseleave', () => body.classList.remove('cursor-hidden'));
  });

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
});

// Animation header
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

// Animation .vc_section
gsap.utils.toArray(".vc_section").forEach(section => {
  gsap.set(section, { opacity: 0, x: -100 });

  ScrollTrigger.create({
    trigger: section,
    start: "top 85%",
    end: "bottom 20%",
    onEnter: () => {
      gsap.to(section, { x: 0, opacity: 1, duration: 1, ease: "power2.out" });
    },
    onLeave: () => {
      gsap.to(section, { x: -100, opacity: 0, duration: 0.6, ease: "power2.in" });
    },
    onEnterBack: () => {
      gsap.to(section, { x: 0, opacity: 1, duration: 1, ease: "power2.out" });
    },
    onLeaveBack: () => {
      gsap.to(section, { x: -100, opacity: 0, duration: 0.6, ease: "power2.in" });
    },
    toggleActions: "play none none none",
    markers: false
  });
});

// Split text animation
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


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const messageContainer = document.getElementById("form-message");

    form.addEventListener("submit", async function (e) {
      e.preventDefault(); // Empêche l'envoi classique

      // Réinitialise le message
      messageContainer.textContent = "";
      messageContainer.className = "text-sm mt-4";

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
        });

        const text = await response.text();

        if (response.ok) {
          messageContainer.textContent = text;
          messageContainer.classList.add("text-green-500");
          form.reset();
        } else {
          messageContainer.textContent = text;
          messageContainer.classList.add("text-red-500");
        }
      } catch (error) {
        messageContainer.textContent = "Erreur réseau. Veuillez réessayer.";
        messageContainer.classList.add("text-red-500");
      }
    });
  });