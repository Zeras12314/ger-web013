const btn = document.querySelector(".button");
const firstName = document.querySelector("#fn");
const lastName = document.querySelector("#ln");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const messageFn = document.querySelector("#message-fn");
const messageLn = document.querySelector("#message-ln");
const messagePw = document.querySelector("#message-pw");
const messageEmail = document.querySelector("#message-email");

const pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

window.onload = reset();

btn.onclick = function () {
  let valueEmail = email.value;
  let valueFn = firstName.value;
  let valueLn = lastName.value;
  let valuePw = password.value;

  if (valueFn != "" && valueLn != "" && valuePw != "" && validate() === true) {
    alert("Success! Your data has been submitted! 🥳🥳🥳");
    reset();
  }
  if (valueFn === "") {
    console.log("It's Working!");
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

  if (valueEmail === "") {
    messageEmail.innerHTML = "Looks like this is not an email";
    messageEmail.style.color = "hsl(0, 100%, 74%) ";
    messageEmail.style.display = "block";
    email.style.border = "2px solid hsl(0, 100%, 74%)";
  }
};

function reset() {
  firstName.value = null;
  lastName.value = null;
  password.value = null;
  email.value = null;
  messageFn.style.display = "none";
  messageLn.style.display = "none";
  messagePw.style.display = "none";
  messageEmail.style.display = "none";
  firstName.style.border = "none";
  lastName.style.border = "none";
  password.style.border = "none";
  email.style.border = "none";
}

function validate() {
  let valueEmail = email.value;
  if (valueEmail.match(pattern)) return true;
  else {
    return false;
  }
}
