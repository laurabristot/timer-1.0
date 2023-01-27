import { Button } from './buttons.js'

export function Controls(){

  function reset() {
    Button.SetTimer.classList.remove('hide')
    Button.Reset.classList.add('hide')
    Button.Play.classList.remove('hide')
    Button.Pause.classList.add('hide')
  }
  
  function pause() {
    Button.Play.classList.toggle('hide')
    Button.Pause.classList.toggle('hide')
  }

  function play(){
    Button.SetTimer.classList.add('hide')
    Button.Reset.classList.remove('hide')
    pause()
  }

  function AudioOnOff(){
    Button.AudioOn.classList.toggle('hide')
    Button.AudioOff.classList.toggle('hide')
  }

  return {
    reset,
    play,
    pause,
    AudioOnOff
  }
}