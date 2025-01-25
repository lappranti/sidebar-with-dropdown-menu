const toggleDropdown = (dropdown, menu, isOpen) => {
  dropdown.classList.toggle("open", isOpen);
  menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
};

// Close all dropdowns
const closeAllDropdowns = () => {
  document
    .querySelectorAll(".dropdown-container.open")
    .forEach((openDropdown) => {
      toggleDropdown(
        openDropdown,
        openDropdown.querySelector(".dropdown-menu"),
        false
      );
    });
};

document.querySelectorAll(".dropdown-toggle").forEach((dropdownTogle) => {
  dropdownTogle.addEventListener("click", (e) => {
    e.preventDefault();

    const dropdown = e.target.closest(".dropdown-container");
    const menu = dropdown.querySelector(".dropdown-menu");
    const isOpen = dropdown.classList.contains("open");

    closeAllDropdowns(); //Close all open dropdown

    toggleDropdown(dropdown, menu, !isOpen); //Toggle current dropdown visibility
  });
});

document
  .querySelectorAll(".sidebar-toggler , .sidebar-menu-toggler")
  .forEach((button) => {
    button.addEventListener("click", () => {
      closeAllDropdowns();

      //  Toggle class on sidebar
      document.querySelector(".sidebar").classList.toggle("collapsed");
    });
  });

// Collpase sidebar by default on small screens
if (window.innerWidth <= 1024) {
  document.querySelector(".sidebar").classList.toggle("collapsed");
}
