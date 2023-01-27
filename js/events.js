import { Button } from './buttons.js'

export function Events({
  controls,
  timer,
  sound,

}){


  Button.Play.onclick = function () {
    controls.play()
    timer.countdown()
    sound.pressButton()
    
  }
  
  Button.Pause.onclick = function () {
    controls.pause()
    timer.stopCountdown()
    sound.pressButton()
  
  }
  
  Button.Reset.onclick = function () {
    controls.reset()
    timer.resetTimer()
    sound.pressButton()
  
  }
  
  Button.AudioOn.onclick = function () {
    controls.AudioOnOff()
    sound.pressButton()
    sound.bgAudioOn()
  }
  
  Button.AudioOff.onclick = function () {
    controls.AudioOnOff()
    sound.pressButton()
    sound.bgAudioOff()
  }
  
  
  Button.SetTimer.onclick = function () {
    sound.pressButton()
    let minutes = prompt('Quantos minutos?') || 0
    timer.updateTimerDisplay(minutes, 0)
    timer.updateMinutes(minutes)
  
  }

  return {

  }
}