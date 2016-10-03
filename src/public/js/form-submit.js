(function() {

  var form = document.querySelector(".contact-form"),
      name = form.querySelector("#name"),
      email = form.querySelector("#email"),
      message = form.querySelector("#message");

  var formData = JSON.parse(sessionStorage.getItem("formData")) || {
    name: "",
    email: "",
    message: ""
  }

  console.log(formData);

  if (sessionStorage) {
    name.value = formData.name;
    email.value = formData.email;
    message.value = formData.message;
  }

  form.onsubmit = function(e) {
    e.preventDefault();

    // cache users input
    if (sessionStorage) {
      formData.name = name.value;
      formData.email = email.value;
      formData.message = message.value;
      sessionStorage.setItem("formData", JSON.stringify(formData));
    }

    if (
      name.value.trim() !== "" &&
      name.value.trim() !== "" &&
      name.value.trim() !== "") {
      alert("You're message has been sent");
      // form.submit();
    } else {
      alert("You left a required filed blank");
    }

  }

}())
