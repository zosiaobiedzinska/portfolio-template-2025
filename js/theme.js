const root = document.documentElement;
const toggle = document.getElementById("themeToggle");

// Wczytaj poprzedni wybór użytkownika
if (localStorage.getItem("theme") === "dark") {
  root.classList.add("dark");
}

// Po kliknięciu — przełącz motyw
toggle.addEventListener("click", () => {
  root.classList.toggle("dark");

  // Zapamiętaj wybór
  if (root.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
