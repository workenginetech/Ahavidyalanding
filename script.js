const launchDate = new Date("2026-10-02T00:00:00+05:30").getTime();

function updateCountdown() {
  const distance = launchDate - Date.now();
  if (distance <= 0) {
    ["days","hours","minutes","seconds"].forEach(id => document.getElementById(id).textContent = "00");
    return;
  }
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);
  document.getElementById("days").textContent = String(days).padStart(2,"0");
  document.getElementById("hours").textContent = String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

function handleNotify(event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const note = document.getElementById("form-note");
  if (!email) return false;
  note.textContent = "Thanks! This static version is ready for S3/CloudFront; connect your email service when you're ready to collect subscribers.";
  note.style.display = "block";
  return false;
}
