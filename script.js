const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const categoryInput = document.getElementById("category");
const policyInput = document.getElementById("policy");
const subscribeButton = document.getElementById("btn-submit");

subscribeButton.addEventListener("click", (e) => {
  e.preventDefault();

  let errorMessage = "";

  const frequencyInput = document.querySelector(
    'input[name="frequency"]:checked',
  );

  if (fullnameInput.value.trim() == "") {
    errorMessage = "Full name must be filled";
  } else if (!emailInput.value.endsWith("@gmail.com")) {
    errorMessage = "Email must end with '@gmail.com'";
  } else if (categoryInput.value == "") {
    errorMessage = "You must select a category";
  } else if (!frequencyInput) {
    errorMessage = "You must choose newsletter frequency";
  } else if (!policyInput.checked) {
    errorMessage = "You must agree with Terms & Privacy Policy";
  } else {
    errorMessage = "Subscription success";
  }

  alert(errorMessage);
});
