var header = document.getElementsByClassName("header")[0];

document.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    header.style.position = "fixed";
  }
  else {
    header.style.position = "relative";
  }
});
