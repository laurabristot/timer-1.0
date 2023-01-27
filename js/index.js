import {Button} from './buttons.js'

const url = 'https://www.youtube.com/watch?v=aCfVsrpMhHs'

let minutes;
let seconds;
let timerTimeout;

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

function resetControls () {
  Button.SetTimer.classList.remove('hide')
  Button.Reset.classList.add('hide')
  Button.Play.classList.remove('hide')
  Button.Pause.classList.add('hide')
  resetTimer()
}

function resetTimer(){
  clearTimeout(timerTimeout)
  updateTimerDisplay(25, 0)
}

function playPause (){
  Button.Play.classList.toggle('hide')
  Button.Pause.classList.toggle('hide')
}

function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
  timerTimeout = setTimeout(function(){
    seconds = Number(secondsDisplay.textContent)
    minutes = Number(minutesDisplay.textContent)


    if (minutes <= 0 && seconds <= 0){
      resetControls()
      return
    }

    if(seconds <= 0) {
      seconds = 10
      --minutes
    }
    
    updateTimerDisplay(minutes, String(seconds-1) )
    
    
    countdown()
    }, 1000)
}


Button.Play.onclick = function(){
  playPause ()
  Button.SetTimer.classList.add('hide')
  Button.Reset.classList.remove('hide')
  countdown()
}

Button.Pause.onclick = function(){
  playPause ()
  clearTimeout(timerTimeout)
}

Button.Reset.onclick =  function(){
  resetControls ()
  clearTimeout(timerTimeout)
}


Button.AudioOn.onclick =  function(){
  Button.AudioOn.classList.toggle('hide')
  Button.AudioOff.classList.toggle('hide')
}

Button.AudioOff.onclick =  function (){
  Button.AudioOn.classList.toggle('hide')
  Button.AudioOff.classList.toggle('hide')
}

Button.SetTimer.onclick = function(){
  minutes = prompt('Quantos minutos?') || 0
  updateTimerDisplay(minutes, 0)
}

//funcao para diminuir o tempo é com setTimeOut a cada 1s --segundo e a cada 60s --minuto