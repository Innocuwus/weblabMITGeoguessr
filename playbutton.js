const button = document.getElementById("firstButton");
button.addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "loggedin.html";
  });
  