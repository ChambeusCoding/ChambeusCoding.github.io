  document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    const blogPosts = Array.from(document.querySelectorAll(".card.blog-post"));

    blogPosts.sort((a, b) => {
      const dateA = new Date(a.querySelector(".post-date").textContent.replace("*Posted ", ""));
      const dateB = new Date(b.querySelector(".post-date").textContent.replace("*Posted ", ""));
      return dateB - dateA; // Newest first
    });

    blogPosts.forEach(post => main.appendChild(post));
  });

