var canvas1 = document.getElementById("canvas")
var config = canvas1.getContext('2d'); 
var mouseandrats = 0 
var color = ("teal")
var lineWidth = 3
var lastpositionx = 0 
var lastpositiony = 0 
canvas1.addEventListener("mousedown", my_mousedown)
function my_mousedown() {
    mouseandrats = "mousedownn"
}
canvas1.addEventListener("mouseup", my_mouseup)
function my_mouseup() {
    mouseandrats = "mouseup"
}
canvas1.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave() {
    mouseandrats = "mouseleave"
}
canvas1.addEventListener("mousemove", my_mousemove)
function my_mousemove() {
    var currentpostionx = e.clientX - canvas1.offsetLeft 
    var currentpostiony = e.clientY - canvas1.offsetTop 
    if (mouseandrats == "mousedown") {
            config.beginPath() 
        config.strokeStyle = color 
        config.lineWidth = 2
        config.moveto(lastpositionx, lastpositiony)
        config.lineTo(currentpositionx, currentpositiony)
        config.stroke()
    }
    lastpositionx = currentpositionx
    lastpositiony = currentpositiony 
}