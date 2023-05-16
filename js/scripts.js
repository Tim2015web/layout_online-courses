//Video panel----------
let videoPanelElement = document.querySelector(".video-panel");
let videoFrameElement = document.querySelector(".video-panel__video");
let playBtmElement = document.querySelector(".play-video");
let closeBtmElement = document.querySelector(".video-panel__close-btn");

playBtmElement.addEventListener("click", function () {
   videoPanelElement.style = "display: flex;";
});

//Я так и не нашел решение по остановки видео, поэтому сделал костыль через таймер (надо потом исправить)
//Едва ли кто-то будет это читать. На улице сегодня хорошая погода +25 солнечно 16.05.2023
function timerFunction() {
   videoPanelElement.style = "display: none;";
}

closeBtmElement.addEventListener("click", function () {
   videoFrameElement.src = videoFrameElement.src;
   var timerId = setTimeout(timerFunction, 1000);
});

//Hamburger menu----------
let bodyElement = document.querySelector("body");
let barElement = document.querySelectorAll(".bar");
let barPanelElement = document.querySelector(".bar-panel");
let barStatus = false; //Panel display status

function closeBarPanel() {
   barStatus = false;
   barPanelElement.style = "display: none;";
   bodyElement.style = "overflow: visible;";
}

barPanelElement.addEventListener("click", closeBarPanel);

barElement.forEach(e => e.addEventListener("click", function () {
   if (barStatus == false) {
      barStatus = true;
      barPanelElement.style = 'display: block;';
      bodyElement.style = "overflow: hidden;"; //Stop scroll
   } else {
      closeBarPanel();
   }
}));

//Statistic animation----------
let statisticsElement = document.querySelectorAll(".count");
let elementArray = [];
let numbersArray = [];
let statisticsCountTimes = 30; //The count of repetitions

statisticsElement.forEach(e => {
   elementArray.push(Number(e.innerHTML) / statisticsCountTimes);
   numbersArray.push(Number(e.innerHTML) / statisticsCountTimes);
});

window.addEventListener("scroll", function statisticsAnimation() {
   if (statisticsElement[0].getBoundingClientRect().top < (window.innerHeight - 100)) {
      window.removeEventListener("scroll", statisticsAnimation);

      let statisticsTimer = setInterval(timerFunction, 50);

      function timerFunction() {
         for (let i = 0; i < 4; i++) {
            statisticsElement[i].innerHTML = Math.round(elementArray[i]);
            elementArray[i] = elementArray[i] + numbersArray[i];
         }

         //Stop the timer
         statisticsCountTimes--;
         if (statisticsCountTimes == 0) { clearInterval(statisticsTimer) };
      }
   }
});