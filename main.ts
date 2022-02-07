input.onButtonPressed(Button.A, function () {
    if (position == 2) {
        points = 1
    }
})
function move () {
    if (direction == 1) {
        if (position == 4) {
            led.unplot(position, 2)
            position += -1
            led.plot(position, 2)
            direction = 0
        }
    } else {
        if (position == 0) {
            led.unplot(position, 1)
            position += 1
            led.plot(position, 2)
            direction = 0
        } else {
            led.unplot(position, 0)
            position += 1
            led.plot(position, 2)
            position = 1
        }
    }
}
let points = 0
let direction = 0
let position = 0
position = 2
direction = 1
