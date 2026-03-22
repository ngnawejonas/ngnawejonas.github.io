(function() {
  var storageKey = "theme-preference";
  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");
  var mediaQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function getStoredTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      return;
    }
  }

  function getPreferredTheme() {
    var storedTheme = getStoredTheme();

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    if (mediaQuery && mediaQuery.matches) {
      return "dark";
    }

    return "light";
  }

  function getActiveTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function updateToggle(theme) {
    if (!toggle) {
      return;
    }

    var isDark = theme === "dark";
    var label = isDark ? "Switch to light mode" : "Switch to dark mode";
    var icon = toggle.querySelector("i");
    var text = toggle.querySelector(".screen-reader-text");

    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);

    if (icon) {
      icon.classList.toggle("fa-sun", isDark);
      icon.classList.toggle("fa-moon", !isDark);
    }

    if (text) {
      text.textContent = label;
    }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    updateToggle(theme);
  }

  function syncWithSystem(event) {
    var storedTheme = getStoredTheme();

    if (storedTheme === "light" || storedTheme === "dark") {
      return;
    }

    applyTheme(event.matches ? "dark" : "light");
  }

  applyTheme(getPreferredTheme());

  if (toggle) {
    toggle.addEventListener("click", function() {
      var nextTheme = getActiveTheme() === "dark" ? "light" : "dark";

      setStoredTheme(nextTheme);
      applyTheme(nextTheme);
    });
  }

  if (mediaQuery) {
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncWithSystem);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(syncWithSystem);
    }
  }
})();
