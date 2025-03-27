document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  toggleBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});

function show() {
  var message = document.getElementById("d1").value;
  alert(message);
}
