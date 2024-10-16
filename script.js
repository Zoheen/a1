document.addEventListener("DOMContentLoaded", function () {

  const headings = document.querySelectorAll("h2, h3");

  headings.forEach((heading) => {
    heading.addEventListener("click", function () {

      const content = this.nextElementSibling;
      if (content) {
        content.style.display =
          content.style.display === "block" ? "none" : "block";
      }
    });
  });
});
