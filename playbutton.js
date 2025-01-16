

  document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("firstButton").addEventListener("click", () => {
      console.log(window.location.href);
      window.location.href = "loggedin.html";
    });

  document.getElementById("play").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "playStage.html";
  });

  document.getElementById("lead").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "leaderpage.html";
  });

  document.getElementById("accSett").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "accountSetts.html";
  });

});
