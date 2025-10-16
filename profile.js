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
