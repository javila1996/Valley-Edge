const quoteForm = document.getElementById("quoteForm");
const successMessage = document.getElementById("successMessage");
const quoteBtn = document.getElementById("quoteBtn");

quoteBtn.addEventListener("click", () => {
  document.querySelector(".contact").scrollIntoView({
    behavior: "smooth",
  });
});

quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  successMessage.textContent =
    "Thank you! Your quote request has been submitted.";

  quoteForm.reset();
});