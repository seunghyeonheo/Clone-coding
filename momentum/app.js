const loginForm = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const userName = loginForm.value;
  console.log(userName);
}

loginForm.addEventListener("submit", onLoginBtnClick);
