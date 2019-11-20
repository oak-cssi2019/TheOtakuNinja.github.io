console.log("YARE YARE DAZE");
class GameOfLife {
  constructor(){
  }

  next(shape) {
  }
}

class Canvas {
  constructor(container){
    let canvasElement = document.createElement("canvas");
    this.obj = canvasElement;
    this.pixelWidth = 803;
    canvasElement.width = this.pixelWidth;
    this.pixelHeight = 506;
    canvasElement.height = this.pixelHeight;
    container.appendChild(canvasElement);
    this.ctx = this.obj.getContext("2d");
    this.setGridSize(11);
  }

  draw(cells){
    let ctx = this.ctx;


    ctx.fillStyle = "#7e7e7e";
    ctx.lineWidth = 1;
    ctx.fillRect(0,0, this.pixelWidth, this.pixelHeight);
    ctx.strokeStyle = "#999";

    for (let n = this.cellSize; n < this.pixelWidth; n += this.cellSize) {
      ctx.beginPath();
      ctx.moveTo(n + .5 , 0);
      ctx.lineTo(n + .5 , this.pixelHeight);
      ctx.stroke();
    }

    for (let n = this.cellSize; n < this.pixelHeight; n += this.cellSize) {
      ctx.beginPath();
      ctx.moveTo(0, n + .5);
      ctx.lineTo(this.pixelWidth , n + 0.5);
      ctx.stroke();
    }


  }

  click(fn){

  }

  getDimension(){

  }

  getGridSize(){

  }

  setGridSize(gridSize){
    this.cellSize = gridSize;
    this.width = Math.floor(this.pixelWidth/this.cellSize);
    this.height = Math.floor(this.pixelHeight/this.cellSize);
    // this.cellSize = size;
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


class Controls {
  constructor(Canvas, Shape, GameOfLife){
       this.canvas = Canvas;
       this.shape = Shape;
       this.gameoflife = GameOfLife;
       this.started = false;
       this.timer = null;
       this.generation = 0;
  }

  init(shapes){
    this.canvas.click((event) => {
    });
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
let control = new Controls(canvas, shape, gameoflife);

canvas.draw();
