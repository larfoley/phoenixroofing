(function() {

  var body = document.body;
  var nav = document.querySelector('.site-nav');

  body.onscroll = function() {
    if (body.scrollTop > 160) {
      !nav.classList.contains("fixed") ? nav.classList.add("fixed") : null;
    } else {
      nav.classList.remove("fixed");
    }
  }

}())

function scrollToEl() {
  var el = document.querySelector('#Syntax');
  var bdy = document.body;
  var id;

  console.log("body " + bdy.scrollTop + " " + "el " + el.offsetTop);

  // var el = document.querySelector(el);

  id = setInterval(function() {

    if (bdy.scrollTop > el.offsetTop) {
      console.log("clearing interval...");
      clearInterval(id);
    }
    
    console.log("scrolling body...");
    bdy.scrollTop += 1;
    console.log(bdy.scrollTop);

  }, 10)

}

scrollToEl();
