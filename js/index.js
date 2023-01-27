import { Controls } from './controls.js'
import { Timer } from './timer.js'
import { Sound } from './sounds.js'
import { Events } from './events.js'

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const controls = Controls()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})