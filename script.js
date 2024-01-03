var header = document.getElementsByClassName("header-outside")[0];
var main_logo = document.getElementsByClassName("main-logo")[0];

document.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    header.style.position = "fixed";
    main_logo.style.top = "110px";
    main_logo.style.height = "80px";
  }
  else {
    header.style.position = "relative";
    main_logo.style.top = "10px";
    main_logo.style.height = "180px";
  }
});
