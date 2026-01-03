input.onLogoEvent(TouchButtonEvent.Touched, function () {
    a = 0
    b = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    a += 1
    basic.showNumber(a)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 100; index++) {
        basic.showNumber(a * b)
    }
})
input.onButtonPressed(Button.B, function () {
    b += 1
    basic.showNumber(b)
})
let b = 0
let a = 0
a = 0
b = 0
