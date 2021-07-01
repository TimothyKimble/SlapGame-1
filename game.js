health = 100
hits = 0

function drawArea() {

}

function update() {
  death()
  document.getElementById('health').innerText = `${health}`
  document.getElementById('hit').innerText = `${hits}`
  replaceimg()
}

function death() {
  if (health <= 0) {
    document.getElementById("button").innerHTML = `<div><button  disabled>It's Dead</button></div>`
    health = 0
  }
}

function slap() {
  health -= 1
  hits += 1
  update()
}

function punch() {
  health -= 5
  hits += 1
  update()
}

function kick() {
  health -= 10
  hits += 1
  update()
}


function replaceimg() {
  if (health <= 50 && health > 0) {
    document.getElementById("img").innerHTML = `<img class='w-100' height=400px src="https://i.pinimg.com/originals/da/87/8c/da878c7934de559a5658a2a30b09f9e8.jpg" alt="placeholder"></img>`
  }
  else if (health <= 0) {
    document.getElementById("img").innerHTML = `<img class='w-100' height=400px src="https://i.redd.it/xj7vzxriqcj11.png" alt="placeholder"></img>`

  }
}