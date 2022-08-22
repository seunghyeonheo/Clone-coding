const loginForm = document.querySelector("#login-Form");
const loginInput = document.querySelector("#login-Form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault(); //preventDefault를 호출하면 브라우저의 기본 동작을 막아준다.
  console.log(event);
}
//변수의 자리에 event의 입력여부는 선택사항이지만, 여기에 공간을
// 만들어주면, JS에서 event를 채워준다.

function handleLinkClick(tomato) {
  tomato.preventDefault();
  alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
