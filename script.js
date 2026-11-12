// Set the footer year automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Demo-only form interaction. This does NOT send or store the message.
const contactForm = document.getElementById("contactForm");
const formNotice = document.getElementById("formNotice");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const visitorName = document.getElementById("name").value.trim();
  formNotice.textContent = `Thank you, ${visitorName}! This is a demo form. Connect PHP and MySQL to store messages.`;
  contactForm.reset();
});
