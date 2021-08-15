// Submit button click handler
document.getElementById("submit-btn").addEventListener("click", function () {
  //   take input
  const getMailInput = document.getElementById("email");
  const getPasswordInput = document.getElementById("password");
  //   assign value in variable
  const email = getMailInput.value;
  const password = getPasswordInput.value;
  if (email == "mymail@gmail.com" && password == "coder") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid password");
  }
});
