document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu-icon");
  const sidebar = document.querySelector(".sidebar");
  const container = document.querySelector(".container");

  menuIcon.addEventListener("click", function() {
    sidebar.classList.toggle("sidebar-open");
    container.classList.toggle("container-shift");
  });
});
