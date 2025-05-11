document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;
  
    const savedTheme = localStorage.getItem("theme");
  
    if (!savedTheme) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      if (savedTheme === "dark") {
        body.classList.add("dark-mode");
      } else {
        body.classList.remove("dark-mode");
      }
    }
  
    toggleBtn.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      const newTheme = body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
    });
  });
  