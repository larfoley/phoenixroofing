(function() {


  window.onload = function() {

    var loadingEl = document.querySelector(".loading-screen");

    loadingEl.style.opacity = 0;

    setTimeout(function() {

      document.body.removeChild(loadingEl);

    },1000);
  };

}());
