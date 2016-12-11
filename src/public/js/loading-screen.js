(function() {

  window.onload = function() {

    var loadingEl = document.querySelector(".loading-screen");
    var body = document.body;
    
    loadingEl.style.opacity = 0;

    setTimeout(function() {

      body.removeChild(loadingEl);

    },1000);
  };

}());
