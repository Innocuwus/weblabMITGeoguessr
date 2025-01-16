  document.addEventListener("DOMContentLoaded", function () {
    
    if(document.getElementById("firstButton")) {addEventListener("click", () => {
      console.log(window.location.href);
      window.location.href = "loggedin.html";
    });
  }

  if(document.getElementById("play")) {document.getElementById("play").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "playStage.html";
  });
  }

  if(document.getElementById("lead")) {document.getElementById("lead").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "leaderpage.html";
  });
  }

  if(document.getElementById("accSett")) {document.getElementById("accSett").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "accountSetts.html";
  });
  }

  if(document.getElementById("easy")) {document.getElementById("easy").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "easyMode.html";
  });
  }

  if(document.getElementById("normal")) {document.getElementById("normal").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "normalMode.html";
  });
  }

  if(document.getElementById("pro")) {document.getElementById("pro").addEventListener("click", () => {
    console.log(window.location.href);
    window.location.href = "proMode.html";
  });
  }
});

/* 
document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    if (playButton) {
        playButton.addEventListener('click', function() {
            // Your event handler code here
        });
    }
});
*/