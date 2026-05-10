function toggleSearch() {
  const input = document.getElementById("searchInput");

  input.classList.toggle("open");

  if (input.classList.contains("open")) {
    input.focus();
  }
}

/* SEARCH WHEN USER TYPES */
document.getElementById("searchInput").addEventListener("keyup", function () {

  let value = this.value.toLowerCase();

  let sections = document.querySelectorAll("section");

  sections.forEach((section) => {

    if (section.innerText.toLowerCase().includes(value)) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }

  });

});/* =========================
   MOBILE MENU
========================= */
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");

  navLinks.classList.toggle("open");
}

/* =========================
   SEARCH BOX
========================= */
function toggleSearch() {
  const searchInput = document.getElementById("searchInput");

  searchInput.classList.toggle("open");

  if (searchInput.classList.contains("open")) {
    searchInput.focus();
  }
}