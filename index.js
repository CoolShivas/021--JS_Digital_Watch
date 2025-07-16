const accClockID = document.getElementById("clock");
      // console.log(accClockID);// Getting the p tag on console;

      //=====////=====// Starting of defining the currentTime and calling it. //=====////=====//
      const currentTime = () => {
        let currTiming = new Date().toLocaleTimeString();
        //console.log(currTiming);// Getting the time on console => 2:37:20 am;

        accClockID.textContent = currTiming; // Assigning the real time to the id clock  with text as numerical time;
      };

      currentTime(); // Calling the function;
      //=====////=====// Ending of defining the currentTime and calling it. //=====////=====//

      //////*******************************************************************************************************//////

       //=====////=====// Starting of defining the setInterval to repeatedly call currentTIme() in every one second. //=====////=====//

      // setInterval(() => {
      //   return currentTime();
      // }, 1000);

      //=====////=====// Ending of defining the setInterval to repeatedly call currentTIme() in every one second. //=====////=====//

      //////*******************************************************************************************************//////

       //=====////=====// Starting of defining the setTimeout with clearInterval to stop the setInterval after timeout of five seconds. //=====////=====//

       const interValID = setInterval(() => {currentTime()}, 1000);

       setTimeout(() => {
        return(clearInterval(interValID));
       }, 5000);// Stopping the watch or seconds after 5 seconds;

       //=====////=====// Ending of defining the setTimeout with clearInterval to stop the setInterval after timeout of five seconds. //=====////=====//