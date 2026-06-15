window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('is-ready');
});

const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
const countdownEl = document.getElementById('countdown');

function updateCountdown() {
  if (!countdownEl) return;

  const now = new Date();
  const diff = launchDate - now;

  if (diff <= 0) {
    countdownEl.textContent = 'Release live';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Inert demo waitlist — no data is sent anywhere.
const waitlistForm = document.getElementById('waitlist-form');
if (waitlistForm) {
  waitlistForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const confirmEl = document.getElementById('waitlist-confirm');
    if (confirmEl) confirmEl.hidden = false;
    waitlistForm.reset();
  });
}