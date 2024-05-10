let checkBox = document.getElementById("darkmode-toggle");

checkBox.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.classList.add("dark-theme");
  } else {
    document.documentElement.classList.remove("dark-theme");
  }
});
