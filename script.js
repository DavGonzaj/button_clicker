function logOut(element){
if (element.innerText == "Log in") {
  element.innerText = "Log out";
}
else {
  element.innerText = "Log in";
}

}


function hideBut(element) {
  element.remove();
}


function popUp() {
  alert("Ninja was liked")
}