export function Sound() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  function pressButton(){
    buttonPressAudio.play()
  }

  function timerEnd(){
    kitchenTimer.play()
  }

  function bgAudioOn(){
    bgAudio.play()
  }

  function bgAudioOff(){
    bgAudio.pause()
  }
  return {
    pressButton,
    timerEnd,
    bgAudioOn,
    bgAudioOff
  }
}