// Custom cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;
document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
});
function animateCursor() {
  cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    ring.style.width = "52px";
    ring.style.height = "52px";
  });
  el.addEventListener("mouseleave", () => {
    ring.style.width = "36px";
    ring.style.height = "36px";
  });
});

// Typed effect
const phrases = [
  "Python Developer",
  "Backend Engineer",
  "API Builder",
  "Problem Solver",
];
let pi = 0,
  ci = 0,
  deleting = false;
const typedEl = document.getElementById("typed");
function type() {
  const phrase = phrases[pi];
  if (!deleting) {
    typedEl.textContent = phrase.slice(0, ++ci);
    if (ci === phrase.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = phrase.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 60 : 90);
}
setTimeout(type, 1200);

// Theme toggle — default: DARK. Click switches to Light, click again back to Dark.
const html = document.documentElement;
const themeBtn = document.getElementById("themeToggle");
const toggleIcon = document.getElementById("toggleIcon");
const toggleLabel = document.getElementById("toggleLabel");

function applyTheme(isDark) {
  if (isDark) {
    html.classList.remove("light");
    document.body.style.backgroundColor = "#0a0c0f";
    toggleIcon.textContent = "🌙";
    toggleLabel.textContent = "Dark";
    ring.style.borderColor = "rgba(0,255,135,0.4)";
  } else {
    html.classList.add("light");
    document.body.style.backgroundColor = "#f4f6f9";
    toggleIcon.textContent = "☀️";
    toggleLabel.textContent = "Light";
    ring.style.borderColor = "rgba(0,168,90,0.4)";
  }
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Load saved preference, default to dark
const saved = localStorage.getItem("theme");
applyTheme(saved !== "light");

themeBtn.addEventListener("click", () => {
  applyTheme(html.classList.contains("light"));
});

// Re-bind cursor hover on toggle button
themeBtn.addEventListener("mouseenter", () => {
  ring.style.width = "52px";
  ring.style.height = "52px";
});
themeBtn.addEventListener("mouseleave", () => {
  ring.style.width = "36px";
  ring.style.height = "36px";
});
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
