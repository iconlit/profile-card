const header = document.getElementById("header");
const profileName = "DAVID";

function addName() {
  header.textContent = profileName;
}

addName();

function startClock() {
  const timeCurrent = document.querySelector('[data-testid="test-user-time"]');

  function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    timeCurrent.textContent = `${hours}:${minutes}:${seconds}`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

startClock();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    document
      .querySelectorAll("[id^='error-']")
      .forEach((p) => (p.textContent = ""));

    if (!name) {
      valid = false;
      document.getElementById("error-name").textContent =
        "Full name is required.";
    }

    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      valid = false;
      document.getElementById("error-email").textContent =
        "Please enter a valid email address.";
    }

    if (!subject) {
      valid = false;
      document.getElementById("error-subject").textContent =
        "Subject is required.";
    }

    if (message.length < 10) {
      valid = false;
      document.getElementById("error-message").textContent =
        "Message must be at least 10 characters.";
    }

    const success = document.querySelector(
      "[data-testid='test-contact-success']"
    );
    if (valid) {
      success.hidden = false;
      this.reset();
    } else {
      success.hidden = true;
    }
  });
