(function() {

  var siteNav = document.querySelector(".site-nav");
  var toggleNav = siteNav.querySelector(".site-nav__toggle");

  toggleNav.onclick = function() {
    if (siteNav.classList.contains("isClosed")) {
      siteNav.classList.remove('isClosed');
      siteNav.classList.add('isOpen');
    } else {
      siteNav.classList.remove('isOpen');
      siteNav.classList.add('isClosed');
    }
  }

}())
