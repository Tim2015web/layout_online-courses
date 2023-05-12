//Hamburger menu----------
let barElement = document.querySelectorAll(".bar");
let barPanelElement = document.querySelector(".bar-panel");
let barStatus = false; //Panel display status

function closeBarPanel() { //Hide the panel
   barStatus = false;
   barPanelElement.style = 'display: none;';
}

barPanelElement.addEventListener("click", closeBarPanel);

barElement.forEach(e => e.addEventListener("click", function () {
   if (barStatus == false) {
      barStatus = true;
      barPanelElement.style = 'display: block;';
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