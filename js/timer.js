import {Sound} from "./sounds.js"

const sound = Sound()

export function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}){

  let timerTimeout
  let minutes = Number(minutesDisplay.textContent)

  function updateTimerDisplay(newMinutes, seconds){
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function resetTimer(){
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeout)
  }

  function countdown() {
    timerTimeout = setTimeout(function(){
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      
      updateTimerDisplay(minutes, 0)

      if (minutes <= 0 && seconds <= 0){
        resetControls()
        sound.timerEnd()
        updateTimerDisplay()
        return
      }
  
      if(seconds <= 0) {
        seconds = 60

        --minutes
      }
      
      updateTimerDisplay(minutes, String(seconds-1) )
      
      
      countdown()
      }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function stopCountdown(){
    clearTimeout(timerTimeout)
  }

  return {
    updateTimerDisplay,
    countdown,
    resetTimer,
    stopCountdown,
    updateMinutes
  }
}
