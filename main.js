var typed = new Typed(".text", {
  strings: ["Web Developer", "Software Engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
document
  .getElementById("contact-nav")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const targetElement = document.getElementById("contact");
    const yOffset = -50;

    if (targetElement) {
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
document
  .getElementById("skills-nav")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag

    const targetElement = document.getElementById("skills");
    const yOffset = -150; // Adjust the offset as needed to compensate for any discrepancies

    if (targetElement) {
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
document
  .getElementById("services-nav")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag

    const targetElement = document.getElementById("services");
    const yOffset = -50; // Adjust the offset as needed to compensate for any discrepancies

    if (targetElement) {
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
document
  .getElementById("about-nav")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag

    const targetElement = document.getElementById("about");
    const yOffset = -50; // Adjust the offset as needed to compensate for any discrepancies

    if (targetElement) {
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
