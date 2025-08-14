
document.addEventListener("DOMContentLoaded", () => {
const searchbox = document.getElementById("searchbox");
const dropdownlist = document.getElementById("dropdownlist");

   searchbox.addEventListener("focus", () => {
    dropdownlist.style.display = "block";
  });
  
  document.addEventListener("click", (e) => {
    if (!searchbox.contains(e.target) && !dropdownlist.contains(e.target)) {
      dropdownlist.style.display = "none";
    }
  });
  
  });

