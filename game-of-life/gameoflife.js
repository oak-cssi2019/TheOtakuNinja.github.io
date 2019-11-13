console.log("YARE YARE DAZE");
class GameOfLife {
  constructor(){
  }

  next(shape) {
  }
}

class Canvas {
  constructor(Container){
    let canvasElement = document.createElement("canvas");
    this.obj = canvasElement;
    this.pixelWidth = 803;
    this.pixelHeight = 506;
    container.appendChild(canvasElement);
    this.ctv = this.obj.getContext("2D");
    this.setGridSize(11);
  }

  draw(){

  }

  click(fn){

  }

  getDimension(){

  }

  getGridSize(){

  }

  setGridSize(gridSize){

  }

}

class Shape {
  constructor(Canvas){
      this.canvas = canvas;
      this.current = [];
      this.collection = {};
  }

  get(){

  }

  set(shape){

  }

  copy(shape){

  }

  redraw(){

  }

  offset(dx, dy){

  }

  toggle(cell){

  }
}

class controls {
  constructor(Canvas, Shape, GameOfLife){
       this.canvas = Canvas;
       this.shape = Shape;
       this.gameoflife = GameOfLife;
       this.started = false;
       this.timer = null;
       this.generation = 0;
  }

  init(shapes){

  }

  setGenerations(gen){

  }

  animate(){

  }

  next(){

  }
}

let canvasElement = document.getElementById("canvas-div");
let canvas = new Canvas(canvasElement);
let shape = new Shape(canvas);
let gameoflife = new GameOfLife();
let controls = new Controls(canvas, shapes, gameoflife);
