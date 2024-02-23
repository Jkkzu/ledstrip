function preencher () {
    t = 110
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 1; index++) {
            for (let n = 0; n <= 25; n++) {
                range = strip.range(0, n)
                range.showColor(neopixel.colors(NeoPixelColors.Red))
                basic.pause(t)
            }
            strip.clear()
        }
        for (let index = 0; index < 1; index++) {
            for (let n = 0; n <= 25; n++) {
                range = strip.range(0, n)
                range.showColor(neopixel.colors(NeoPixelColors.Blue))
                basic.pause(t)
                strip.clear()
            }
            for (let index = 0; index < 1; index++) {
                for (let n = 0; n <= 25; n++) {
                    range = strip.range(0, n)
                    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
                    basic.pause(t)
                    strip.clear()
                }
            }
            for (let index = 0; index < 1; index++) {
                for (let n = 0; n <= 25; n++) {
                    range = strip.range(0, n)
                    range.showColor(neopixel.colors(NeoPixelColors.Green))
                    basic.pause(t)
                    strip.clear()
                }
            }
        }
        t += -10
    }
}
function drop_bit () {
    for (let índice = 0; índice <= 25; índice++) {
        for (let indice2 = 0; indice2 <= 24 - índice; indice2++) {
            range2 = strip.range(indice2, 1)
            range3 = strip.range(25 - índice, índice)
            range2.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(40)
            range2.clear()
            range3.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        strip.clear()
        basic.pause(200)
    }
    for (let índice = 0; índice <= 25; índice++) {
        for (let indice2 = 0; indice2 <= 24 - índice; indice2++) {
            range2 = strip.range(indice2, 1)
            range3 = strip.range(25 - índice, índice)
            range2.showColor(neopixel.colors(NeoPixelColors.Green))
            basic.pause(40)
            range2.clear()
            range3.showColor(neopixel.colors(NeoPixelColors.Green))
        }
        strip.clear()
        basic.pause(200)
    }
    for (let índice = 0; índice <= 25; índice++) {
        for (let indice2 = 0; indice2 <= 24 - índice; indice2++) {
            range2 = strip.range(indice2, 1)
            range3 = strip.range(25 - índice, índice)
            range2.showColor(neopixel.colors(NeoPixelColors.Blue))
            range2.clear()
            basic.pause(40)
            range3.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
        strip.clear()
        basic.pause(200)
    }
    for (let índice = 0; índice <= 25; índice++) {
        for (let indice2 = 0; indice2 <= 24 - índice; indice2++) {
            range2 = strip.range(indice2, 1)
            range3 = strip.range(25 - índice, índice)
            range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.pause(40)
            range2.clear()
            range3.showColor(neopixel.colors(NeoPixelColors.Yellow))
        }
        strip.clear()
        basic.pause(200)
    }
}
function arco_iris () {
    for (let index = 0; index < 10; index++) {
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
    t = 100
    for (let index = 0; index < 4; index++) {
        t += -15
        for (let index = 0; index < 100; index++) {
            strip.show()
            basic.pause(t)
            strip.rotate(4)
        }
        for (let index = 0; index < 100; index++) {
            strip.show()
            basic.pause(t)
            strip.rotate(-4)
        }
    }
}
let range3: neopixel.Strip = null
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let t = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 25, NeoPixelMode.RGB)
basic.forever(function () {
    padrao_cores()
    strip.clear()
    preencher()
    strip.clear()
    arco_iris()
    strip.clear()
    drop_bit()
})
