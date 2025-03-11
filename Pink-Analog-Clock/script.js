const clock = document.querySelector(".clock");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  // Calculate angles
  const secondsDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
  const hoursDeg = ((hours + minutes / 60) / 12) * 360;

  // Apply rotations
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

// Initial update and set interval
updateClock();
setInterval(updateClock, 1000);

// Create numbers
for (let i = 1; i <= 12; i++) {
  const number = document.createElement("div");
  number.className = "number";
  number.style.setProperty("--rotation", `${i * 30}deg`);
  number.innerHTML = `<span>${i}</span>`;
  clock.appendChild(number);
}
