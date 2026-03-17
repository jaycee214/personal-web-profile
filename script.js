function showFunFact() {
  const facts = [
    "I can play musical instruments by ear.",
    "I am a huge fan of alternative rock music.",
    "I am a cat person."
  ];

  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("funFact").textContent = randomFact;
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);