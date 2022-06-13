input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(currenttemperature)
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(min)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(currenttemperature)
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(currenttemperature + 32)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(max)
    basic.clearScreen()
})
let min = 0
let max = 0
let currenttemperature = 0
currenttemperature = input.temperature()
max = currenttemperature
min = currenttemperature
radio.setGroup(84)
basic.forever(function () {
    basic.showString(".")
    currenttemperature = input.temperature()
    if (currenttemperature < min) {
        min = currenttemperature
    }
    if (currenttemperature > max) {
        max = currenttemperature
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    if (currenttemperature > 30) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        music.playMelody("C5 B C5 C5 B A B C5 ", 120)
    }
    if (currenttemperature < 20) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        music.playMelody("D C C D E E E D ", 120)
    }
})
