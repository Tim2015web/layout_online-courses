//Hamburger menu



//Statistica animation
let statisticsElement = document.querySelectorAll(".count"); //Statistics elements
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