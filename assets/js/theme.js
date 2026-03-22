(function() {
  var storageKey = "theme-preference";
  var root = document.documentElement;
  var toggle = null;
  var themeColorMeta = document.querySelector("meta[name='theme-color'][data-theme-color]");
  var mediaQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var hasBoundToggle = false;

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

  function updateThemeColor(theme) {
    if (!themeColorMeta) {
      return;
    }

    themeColorMeta.setAttribute("content", theme === "dark" ? "#0f172a" : "#ffffff");
  }

  function updateToggle(theme) {
    toggle = toggle || document.querySelector("[data-theme-toggle]");

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
    updateThemeColor(theme);
    updateToggle(theme);
  }

  function bindToggle() {
    toggle = document.querySelector("[data-theme-toggle]");

    if (!toggle || hasBoundToggle) {
      updateToggle(getActiveTheme());
      return;
    }

    toggle.addEventListener("click", function() {
      var nextTheme = getActiveTheme() === "dark" ? "light" : "dark";

      setStoredTheme(nextTheme);
      applyTheme(nextTheme);
    });

    hasBoundToggle = true;
    updateToggle(getActiveTheme());
  }

  function syncWithSystem(event) {
    var storedTheme = getStoredTheme();

    if (storedTheme === "light" || storedTheme === "dark") {
      return;
    }

    applyTheme(event.matches ? "dark" : "light");
  }

  applyTheme(getPreferredTheme());

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindToggle, { once: true });
  } else {
    bindToggle();
  }

  if (mediaQuery) {
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncWithSystem);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(syncWithSystem);
    }
  }
})();
