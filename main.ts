function preencher () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 1; index++) {
            for (let n = 0; n <= 25; n++) {
                range = strip.range(0, n)
                range.showColor(neopixel.colors(NeoPixelColors.Red))
                basic.pause(100)
            }
            strip.clear()
        }
        for (let index = 0; index < 1; index++) {
            for (let n = 0; n <= 25; n++) {
                range = strip.range(0, n)
                range.showColor(neopixel.colors(NeoPixelColors.Blue))
                basic.pause(100)
                strip.clear()
            }
        }
        for (let index = 0; index < 1; index++) {
            for (let n = 0; n <= 25; n++) {
                range = strip.range(0, n)
                range.showColor(neopixel.colors(NeoPixelColors.Yellow))
                basic.pause(100)
                strip.clear()
            }
        }
        for (let index = 0; index < 1; index++) {
            for (let n = 0; n <= 25; n++) {
                range = strip.range(0, n)
                range.showColor(neopixel.colors(NeoPixelColors.Green))
                basic.pause(100)
                strip.clear()
            }
        }
    }
}
function arco_iris () {
    for (let index = 0; index < 4; index++) {
        strip.showRainbow(1, 360)
        for (let index = 0; index < 50; index++) {
            strip.rotate(1)
            strip.show()
            basic.pause(100)
        }
        for (let index = 0; index < 50; index++) {
            strip.rotate(-1)
            strip.show()
            basic.pause(100)
        }
    }
}
function fillvarveloc () {
	
}
function padrao_cores () {
    range = strip.range(0, 5)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(5, 5)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    range = strip.range(10, 5)
    range.showColor(neopixel.colors(NeoPixelColors.Blue))
    range = strip.range(15, 5)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(20, 5)
    range.showColor(neopixel.colors(NeoPixelColors.Indigo))
    for (let index = 0; index < 10; index++) {
        strip.show()
        basic.pause(500)
        strip.rotate(4)
    }
}
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 25, NeoPixelMode.RGB)
basic.forever(function () {
    padrao_cores()
    strip.clear()
    preencher()
    strip.clear()
    arco_iris()
})
