// ── CURSOR GLOW ──
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// ── ROLE TYPEWRITER ──
const roles = ['CSE Student.', 'Aspiring Software Engineer.', 'Learning Full-Stack Dev.', 'Problem Solver.'];
let ri = 0, ci = 0, deleting = false;
const roleEl = document.getElementById('roleText');

function type() {
  const cur = roles[ri];
  if (!deleting) {
    roleEl.textContent = cur.slice(0, ++ci);
    if (ci === cur.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    roleEl.textContent = cur.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
    }
  }
  setTimeout(type, deleting ? 40 : 80);
}
type();

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

// ── NAV FADE ON SCROLL DOWN ──
let lastY = 0;
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.style.opacity = (y > lastY && y > 100) ? '0.7' : '1';
  lastY = y;
});
