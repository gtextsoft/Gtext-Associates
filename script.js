const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const form = document.querySelector(".contact-form");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
    });
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    if (button) {
      const oldText = button.textContent;
      button.textContent = "Request Sent";
      button.disabled = true;

      setTimeout(() => {
        form.reset();
        button.textContent = oldText;
        button.disabled = false;
      }, 1800);
    }
  });
}

if (!reduceMotion) {
  const revealTargets = document.querySelectorAll(
    "main > section, .service-card, .property-card, .about-points article, .testimonial, .event-card, .contact-form, .stat, .benefits li"
  );

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min((index % 8) * 70, 420)}ms`);
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealTargets.forEach((element) => observer.observe(element));
}
