input.onButtonPressed(Button.A, function () {
    if (position == 2) {
        position += 1
    }
})
function move () {
    if (direction == 1) {
        if (position == 4) {
            led.unplot(position, 2)
            position += -1
            led.plot(position, 2)
            direction = 0
        } else {
            led.unplot(position, 2)
            position += 1
            led.plot(position, 2)
        }
    } else {
        if (position == 0) {
            led.unplot(position, 2)
            position += 1
            led.plot(position, 2)
            direction = 1
        } else {
            led.unplot(position, 2)
            position += -1
            led.plot(position, 2)
        }
    }
}
let direction = 0
let position = 0
basic.clearScreen()
position = 2
let points = 0
direction = 1
led.plot(2, 2)
basic.forever(function () {
    move()
    basic.pause(1000)
})
