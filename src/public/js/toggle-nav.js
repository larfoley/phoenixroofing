(function() {

  var navToggle = document.querySelector(".main-nav__toggle"),
      nav = document.querySelector(".main-nav__list");

  navToggle.onclick = toggleNav

  function toggleNav() {
    console.log(nav.className);
    nav.classList.toggle("isHidden");
  }

}())
