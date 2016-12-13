var scrollUp = (function() {

  var btnIsVisible = false;
  var body = document.body;
  var scrollBtn = document.createElement("button");
      scrollBtn.className = "scrollUp";
      scrollBtn.onclick = scrollUp

  function renderScrollBtn() {
    body.appendChild(scrollBtn);
  };

  function showScrollBtn() {
    if (!btnIsVisible) {
      scrollBtn.classList.toggle('isVisible');
      btnIsVisible = true;
    }
  };

  function hideScrollBtn() {
    if (btnIsVisible) {
      scrollBtn.classList.toggle('isVisible');
      btnIsVisible = false;
    }
  };

  function scrollUp() {
    var i = 0;
    while (body.scrollTop !== 0) {
      body.scrollTop = i++;
    }
  }

  return {

    init: function(options) {

      options = options || {
        content: "scroll to top",
      }

      scrollBtn.innerHTML = options.content
      scrollBtn.style.backgroundColor = options.backgroundColor;
      scrollBtn.style.color = options.color;

      renderScrollBtn();

      window.addEventListener('scroll', function() {
        if (window.scrollY > 150) {
          showScrollBtn();
        } else {
          hideScrollBtn();
        }
      })

    }
  }

}())

scrollUp.init({
  content: "TOP"
});
