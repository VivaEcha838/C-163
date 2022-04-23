AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        // Add the condition to play sound
        if(e.key === "ArrowUp" || e.key == "ArrowRight" || e.key=="ArrowLeft" || e.key=="ArrowDown"){
          var soundEl = document.querySelector("#sound2")
          soundEl.components.sound.playSound()
        }


      });
    },
  });


  