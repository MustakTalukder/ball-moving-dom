import {
    create
} from './helper'

let left = document.getElementById('left')
let right = document.getElementById('right')
let top = document.getElementById('top')
let down = document.getElementById('down')


let cv = document.getElementById('canvas')
let ball = document.getElementById('ball')

const cvStyle = {
    width: '300px',
    height: '300px',
    border: '3px solid green',
    position: 'relative'

}

const ballStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: 'red',
    position: 'absolute'
}

window.onload = function () {

    Object.assign(cv.style, cvStyle)
    Object.assign(ball.style, ballStyle)
}

let currentLeft

left.addEventListener('click', function (event) {
    changBall(left)
})
right.addEventListener('click', function (event) {
    changBall(right)
})

top.addEventListener('click', function (event) {
    changBall(top)
})

down.addEventListener('click', function (event) {
    changBall(down)
})

let x = 0
let y = 0


function changBall(ballvalue) {

    if (ballvalue === left) {
        if (x <= 0) {
            alert("error")
        } else {
            x = x - 5
            ball.style.left = x + 'px'
        }

    }
    if (ballvalue === right) {

        if (x >= 263) {
            alert("error")
        } else {
            x = x + 5
            ball.style.left = x + 'px'
        }
    }
    if (ballvalue === top) {

        if (y <= 0) {
            alert("error")
        } else {
            y = y - 5
            ball.style.top = y + 'px'
        }
    }
    if (ballvalue === down) {

        if (y >= 263) {
            alert("error")
        } else {
            y = y + 5
            ball.style.top = y + 'px'
        }
    }
}