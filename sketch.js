let cursorWidth = 100
let cursorHeight = 100
let currentColor = 'black'

const colors = document.querySelectorAll('.colors')

colors.forEach(color => {
  color.addEventListener('click', (e) => {
    currentColor = e.target.dataset.hex
  })
})

function setup() {
  let myCanvas = createCanvas(800, 600)
  myCanvas.parent('drawing-pad')
  stroke(currentColor);
  background('white')
}

function draw() {
  stroke(currentColor);
  if (mouseIsPressed === true) {
    fill(currentColor)
    noStroke()
    ellipse(mouseX, mouseY, cursorWidth, cursorHeight);
  }
}