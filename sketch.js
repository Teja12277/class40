var database
var players, forms, games, distance = 0
var playerCount = 0
var gameState = 0
var allPlayers
var car1, car2, car3, car4
var cars = []
var plr
var racer1, racer2, racer3, racer4, track

function preload(){
racer1 = loadImage("images/car1.png")
racer2 = loadImage("images/car2.png")
racer3 = loadImage("images/car3.png")
racer4 = loadImage("images/car4.png")
track = loadImage("images/track.jpg")
}
function setup(){
  createCanvas(displayWidth-5,displayHeight-120)
 database = firebase.database()
  //forms = new form()
  //forms.display();
  game = new Game()
  game.start()
  game.getState()
}

function draw(){
 // background("white");
if(playerCount === 4){
  game.update(1)
}
if(gameState === 1){
  clear();
  game.play();
}
if(gameState === 2){
  console.log("player win")
}
  
}

