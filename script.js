// ================================
// INITIALIZE AOS
// ================================

AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// ================================
// MOBILE NAVIGATION
// ================================

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// CLOSE MENU ON LINK CLICK (MOBILE)

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });

});

// ================================
// DYNAMIC YEAR
// ================================

document.getElementById("year").textContent =
  new Date().getFullYear();

// ================================
// TYPING EFFECT
// ================================

const typedText = document.getElementById("typed");

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "AI Enthusiast",
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentRole = roles[roleIndex];

  if (isDeleting) {

    typedText.textContent =
      currentRole.substring(0, charIndex--);

  } else {

    typedText.textContent =
      currentRole.substring(0, charIndex++);

  }

  let typingSpeed = isDeleting ? 50 : 100;

  // WHEN WORD FINISHES
  if (!isDeleting && charIndex === currentRole.length + 1) {

    typingSpeed = 1500;
    isDeleting = true;
  }

  // WHEN WORD DELETES
  else if (isDeleting && charIndex === 0) {

    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 500;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target =
      document.querySelector(this.getAttribute("href"));

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});

// ================================
// BACK TO TOP BUTTON
// ================================

const backTopButton = document.createElement("button");

backTopButton.innerHTML = "↑";

backTopButton.classList.add("back-top");

document.body.appendChild(backTopButton);

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {

    backTopButton.style.display = "block";

  } else {

    backTopButton.style.display = "none";
  }

});

backTopButton.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// ================================
// SCROLL PROGRESS BAR
// ================================

const progressBar = document.createElement("div");

progressBar.classList.add("progress-bar");

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;

  const docHeight =
    document.body.scrollHeight - window.innerHeight;

  const scrollPercent =
    (scrollTop / docHeight) * 100;

  progressBar.style.width =
    scrollPercent + "%";

});

// ================================
// PARTICLES BACKGROUND
// ================================

tsParticles.load("particles-js", {

  background: {
    color: {
      value: "transparent"
    }
  },

  fpsLimit: 60,

  particles: {

    number: {
      value: 70,
      density: {
        enable: true,
        area: 800
      }
    },

    color: {
      value: "#00bcd4"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.4
    },

    size: {
      value: {
        min: 1,
        max: 4
      }
    },

    links: {
      enable: true,
      distance: 150,
      color: "#00bcd4",
      opacity: 0.2,
      width: 1
    },

    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "bounce"
      }
    }

  },

  interactivity: {

    events: {

      onHover: {
        enable: true,
        mode: "grab"
      },

      onClick: {
        enable: true,
        mode: "push"
      },

      resize: true
    },

    modes: {

      grab: {
        distance: 150,
        links: {
          opacity: 0.5
        }
      },

      push: {
        quantity: 4
      }

    }

  },

  detectRetina: true

});

// ================================
// VANILLA TILT EFFECT
// ================================

VanillaTilt.init(

  document.querySelectorAll(
    ".project-card, .skill-card, .timeline-item"
  ),

  {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    scale: 1.02
  }

);

// ================================
// PROJECT FILTER SYSTEM
// ================================

const filterButtons =
  document.querySelectorAll(".filter-btn");

const projectCards =
  document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    // REMOVE ACTIVE CLASS
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    // ADD ACTIVE CLASS
    button.classList.add("active");

    const filter =
      button.getAttribute("data-filter");

    projectCards.forEach(card => {

      if (
        filter === "all" ||
        card.classList.contains(filter)
      ) {

        card.style.display = "block";

        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 200);

      } else {

        card.style.opacity = "0";
        card.style.transform = "scale(0.8)";

        setTimeout(() => {
          card.style.display = "none";
        }, 300);

      }

    });

  });

});

// ================================
// ACTIVE NAV LINK ON SCROLL
// ================================

const sections =
  document.querySelectorAll("section");

const navItems =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.clientHeight;

    if (
      pageYOffset >= sectionTop &&
      pageYOffset < sectionTop + sectionHeight
    ) {

      current = section.getAttribute("id");

    }

  });

  navItems.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === `#${current}`
    ) {

      link.classList.add("active");

    }

  });

});

// ================================
// HERO IMAGE FLOAT ANIMATION
// ================================

const heroImage =
  document.querySelector(".hero-image-wrapper");

window.addEventListener("mousemove", (e) => {

  const x =
    (window.innerWidth / 2 - e.pageX) / 40;

  const y =
    (window.innerHeight / 2 - e.pageY) / 40;

  heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

});

// ================================
// FADE-IN ON PAGE LOAD
// ================================

window.addEventListener("load", () => {

  document.body.style.opacity = "1";

});

// ================================
// CONSOLE MESSAGE
// ================================

console.log(
  "%c🚀 Portfolio Loaded Successfully",
  "color: #00bcd4; font-size:16px; font-weight:bold;"
);
