let nam = document.querySelector("#name");
let form = document.querySelector("form");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //name validation
  if (nam.value.length < 2) {
    document.querySelector("#hideName").style.display = "block";
  }

  //email regex validation
  const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
  if (!re.test(email.value)) {
    document.querySelector("#hideEmail").style.display = "block";
  }

  //password regex validation
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passRegex.test(pass.value)) {
    document.querySelector("#hidePass").style.display = "block";
  }

  //form submission
  if (
    re.test(email.value) &&
    passRegex.test(pass.value) &&
    nam.value.length > 2
  ) {
    alert("Form submitted successfully");
  }
});
