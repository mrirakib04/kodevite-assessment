// responsive navbar functionality
document.getElementById("nav_btn").addEventListener("click", () => {
  console.log("nav btn clicked");
  const navLinks = document.getElementById("nav_links");
  if (navLinks.classList.contains("hidden")) {
    navLinks.classList.remove("hidden");
    navLinks.classList.add("flex", "flex-col");
  } else {
    navLinks.classList.remove("flex", "flex-col");
    navLinks.classList.add("hidden");
  }
});
