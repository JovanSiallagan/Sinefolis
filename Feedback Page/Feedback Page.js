document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});


document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let errors = [];

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const category = document.getElementById('category').value;
  const memberRadio = document.querySelector('input[name="member"]:checked');

  if (name.length < 3) {
    errors.push("Name must be at least 3 characters.");
  }

  if (email === "" || !email.includes("@") || !email.includes(".")) {
    errors.push("Email is invalid.");
  }

  if (message.length < 10) {
    errors.push("Message must be at least 10 characters.");
  }

  if (category === "") {
    errors.push("Please select a category.");
  }

  if (!memberRadio) {
    errors.push("Please select if you are a member.");
  }

  const errorBox = document.getElementById('error-msg');
  if (errors.length > 0) {
    errorBox.innerHTML = errors.join("<br>");
    errorBox.classList.remove("success");
  } else {
    errorBox.innerHTML = "Feedback submitted successfully!";
    errorBox.classList.add("success");
    document.getElementById('feedbackForm').reset();
  }
});

