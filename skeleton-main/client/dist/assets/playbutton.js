  document.addEventListener("DOMContentLoaded", function () {
    
    if(document.getElementById("firstButton")) {addEventListener("click", () => {
      console.log(window.location.href);
      window.location.href = "loggedin";
    });
  }

  if(document.getElementById("play")) {document.getElementById("play").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "playStage";
  });
  }

  if(document.getElementById("lead")) {document.getElementById("lead").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "leaderpage";
  });
  }

  if(document.getElementById("accSett")) {document.getElementById("accSett").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "accountsetts";
  });
  }

  if(document.getElementById("easy")) {document.getElementById("easy").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "easymode";
  });
  }

  if(document.getElementById("normal")) {document.getElementById("normal").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "normalmode";
  });
  }

  if(document.getElementById("pro")) {document.getElementById("pro").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "promode";
  });
  }

  if(document.getElementById("signout")) {document.getElementById("signout").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "homepage";
  });
  }

  if(document.getElementById("backtolog")) {document.getElementById("backtolog").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "loggedin";
  });
  }

  if(document.getElementById("backtoplay")) {document.getElementById("backtoplay").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "playStage";
  });
  }
});