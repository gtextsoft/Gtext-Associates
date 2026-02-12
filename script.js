const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const form = document.querySelector(".contact-form");

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
