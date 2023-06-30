const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle");

  // state
  const theme = localStorage.getItem("theme");

  // on mount
  theme && document.body.classList.add(theme);

  // handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class");
    }
  };
  // event listeners
  themeToggleBtns.forEach((button) => {
    button.addEventListener("click", handleThemeToggle);
  });
};

export default darkMode;
