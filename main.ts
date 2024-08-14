basic.showIcon(IconNames.Heart)
basic.pause(2000)
basic.clearScreen()
basic.pause(200)
basic.forever(function () {
    basic.showNumber(input.lightLevel())
})
