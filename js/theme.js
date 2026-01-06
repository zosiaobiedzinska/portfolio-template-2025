// Theme toggle: keep it defensive and make dark the default
const toggleButton = document.getElementById("theme-toggle");
const html = document.documentElement; // <html> element

if (toggleButton) {
  // Initialize theme from localStorage. Default = dark.
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light") {
    html.classList.remove("dark");
  } else {
    // default to dark when no preference is stored
    html.classList.add("dark");
  }

  // Update icon states to match current theme
  const updateIcons = () => {
    const sun = toggleButton.querySelector(".sun");
    const moon = toggleButton.querySelector(".moon");
    const isDark = html.classList.contains("dark");
    if (sun) sun.style.opacity = isDark ? "0" : "1";
    if (moon) moon.style.opacity = isDark ? "1" : "0";
  };

  // Wire up click handler
  toggleButton.addEventListener("click", () => {
    const isNowDark = !html.classList.contains("dark");
    // Toggle the dark class
    html.classList.toggle("dark");
    // Persist chosen theme
    localStorage.setItem("theme", isNowDark ? "dark" : "light");
    updateIcons();
  });

  // Ensure icons reflect initial state
  updateIcons();
} else {
  // No toggle found — fail silently
  console.warn("Theme toggle button not found: #theme-toggle");
}
