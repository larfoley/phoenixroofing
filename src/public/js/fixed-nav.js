(function() {

  // make navigation fixed before the nav leaves the viewport

  var body = document.body,
      sideNav = document.querySelector('.page-nav'),
      sideNavOffset = new Number(sideNav.offsetTop),
      sideNavLinks = sideNav.querySelector('a');

  function scrollToEl(el, options) {

    var id;


    if (!options) {
      options = {
        speed: 10
      };
    }

    clearInterval(id);

    id = setInterval(function() {

      var scrollDirection = 1;

      if (body.scrollTop > el.offsetTop) {
        scrollDirection = 1;
        body.scrollTop -= 10;
        console.log("Scrolling up");
      } else if(body.scrollTop < el.offsetTop) {
        body.scrollTop += 10;
        scrollDirection = 0;
        console.log("Scrolling down");
      }

      if (body.scrollTop === el.offsetTop) {
        console.log("Stop scrolling");
        clearInterval(id);
      }

    }, options.speed);
  }

  // Bind handlers

  sideNav.onclick = function(e) {

    // e.preventDefault();

    var href = e.target.href || false;
    var id = "";

    if (href) {

      var parseHref = false;

      for (var i = 0; i < href.length; i++) {
        if (href[i] === "#") {
          parseHref = true;
        }
        if (parseHref) {
          id += href[i];
        }
      }

      // scrollToEl(document.querySelector(id), {
      //   speed: 1
      // });

    }
  };

  window.addEventListener('scroll', function() {

    if (sideNavOffset < body.scrollTop) {
      sideNav.style.position = "fixed";
      sideNav.style.top = 0;
    } else {
      sideNav.style.position = "static";
    }

  }, false);


}());
