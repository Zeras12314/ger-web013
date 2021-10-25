const btn = document.querySelector(".button");
const firstName = document.querySelector("#fn");
const lastName = document.querySelector("#ln");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const messageFn = document.querySelector("#message-fn");
const messageLn = document.querySelector("#message-ln");
const messagePw = document.querySelector("#message-pw");
const messageEmail = document.querySelector("#message-email");

window.onload = document.forms[0].reset();
btn.addEventListener("click", function () {
  let valueFn = firstName.value;
  let valueLn = lastName.value;
  let valuePw = password.value;

  if (valueFn != "" && valueLn != "" && valuePw != "" && validate() === true) {
    document.forms[0].reset();
    alert("Form Successfully Submitted!");
  }
  if (valueFn === "") {
    messageFn.innerHTML = "First Name cannot be empty";
    messageFn.style.color = "hsl(0, 100%, 74%) ";
    messageFn.style.display = "block";
    firstName.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    messageFn.style.display = "none";
    firstName.style.border = "none";
  }
  if (valueLn === "") {
    messageLn.innerHTML = "Last Name cannot be empty";
    messageLn.style.color = "hsl(0, 100%, 74%) ";
    messageLn.style.display = "block";
    lastName.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    messageLn.style.display = "none";
    lastName.style.border = "none";
  }

  if (valuePw === "") {
    messagePw.innerHTML = "Password cannot be empty";
    messagePw.style.color = "hsl(0, 100%, 74%) ";
    messagePw.style.display = "block";
    password.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    messagePw.style.display = "none";
    password.style.border = "none";
  }

  if (validate() === !true) {
    messageEmail.innerHTML = "Looks like this is not an email";
    messageEmail.style.color = "hsl(0, 100%, 74%) ";
    messageEmail.style.display = "block";
    email.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    messageEmail.style.display = "none";
    email.style.border = "none";
  }
});

function validate() {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valueEmail = email.value;
  if (valueEmail.match(pattern)) {
    return true;
  } else {
    return false;
  }
}
