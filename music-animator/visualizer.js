const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 600;
const BACKGROUND_COLOR = "white";
<<<<<<< HEAD
const BAR_COLOR = generateRandomColor();
const COLOR = "black";
const WIDTH = 10;

=======
>>>>>>> upstream/master

class AbstractVisualizer {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.start();
  }

  renderBeatAnimation() {
    throw new Error('Please extend class and override method');
  }

  start() {
    this.drawBackground(this.canvas, {width: CANVAS_WIDTH, height: CANVAS_HEIGHT});
  }

  drawRectangle(point1, point2, point3, point4, rectangleProperties = {}) {
    const context = this.canvas.getContext("2d");
<<<<<<< HEAD
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawRectangle(point1, point2, point3, point4, rectangleProperties = {width:5, color: generateRandomColor()}) {
    const context = this.canvas.getContext("2d");
    context.fillStyle = rectangleProperties.color;
    context.lineWidth = rectangleProperties.width;
    context.strokeStyle = rectangleProperties.color;
    context.beginPath();
=======
    context.lineWidth = rectangleProperties.width || 5;
    context.strokeStyle = rectangleProperties.color || '#FF00000';

>>>>>>> upstream/master
    context.moveTo(point1.x, point1.y);
    context.lineTo(point2.x, point2.y);
    context.lineTo(point3.x, point3.y);
    context.lineTo(point4.x, point4.y);
    context.lineTo(point1.x, point1.y);
<<<<<<< HEAD
    context.fill();
    context.stroke();
    context.closePath();
  }


  drawSquare( startingPoint, sideLength, squareProperties = {width:5, color: generateRandomColor()} ) {
    const context = this.canvas.getContext("2d");
    context.fillStyle = squareProperties.color;
    context.lineWidth = squareProperties.width;
    context.strokeStyle = squareProperties.color;
    context.beginPath();
    context.moveTo(startingPoint.x, startingPoint.y);
    context.lineTo(startingPoint.x + sideLength, startingPoint.y);
    context.lineTo(startingPoint.x + sideLength, startingPoint.y + sideLength);
    context.lineTo(startingPoint.x, startingPoint.y + sideLength);
    context.stroke();
    context.closePath();
    context.fill();
  }
  drawSircle(centerPoint, radius, color) {
  const context = canvas.getContext("2d");
  context.beginPath();
  context.arc(centerPoint.x, centerPoint.y, radius, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();
  context.strokeStyle = color;
  context.stroke();
}

  drawShape(shape, scale = 1.0) {
    // TODO(adam/jamie): Convert params to object (just add to
    // lineProperties).
    switch(shape.type) {
      case Shape.CIRCLE:
        this.drawCircle(shape.point, shape.radius * scale, {color: shape.color, width: shape.width});
        break;
      case Shape.SPIRAL:
        this.drawSpiral(shape.i * scale, shape.startingPoint, shape.color);
        break;
      case Shape.SQUIGGLY:
        this.drawSquigglyLine(shape.startPoint, shape.radius * scale, {color: shape.color, width: shape.width});
        break;
      case Shape.SEMI_CIRCLE:
        this.drawSemiCircle(shape.point, shape.radius * scale, shape.color, shape.width);
        break;
      case Shape.LINE:
        this.drawLine(shape.point, shape.endpoint * scale, {color: shape.color, width: shape.width});
        break;
    }
  }

  /**
   * TODO do we want to do this?
   */
  shrinkShapes() {
      this.clearAllShapes();
      // 2) "Animate" existing shapes by re-drawing them on the canvas and
      // shrinking or growing them based on the boolean isGrowing (flips back and
      // forth).
      this.shapeArr.forEach((shape) => {
        this.drawShape(shape, this.shrinkScale);
      });
  }

  /**
   * TODO do we want to do this?
   */
  growShapes() {
    this.clearAllShapes();

    // 2) "Animate" existing shapes by re-drawing them on the canvas and
    // shrinking or growing them based on the boolean isGrowing (flips back and
    // forth).
    this.shapeArr.forEach((shape) => {
        this.drawShape(shape, this.growScale);
    });
  }

  /**
   * TODO do we want to do this?
  */
  drawBars() {
    const canvas = this.canvas;
    const context = canvas.getContext("2d");
    const numBars = 100;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = BAR_COLOR;
    for (let n = 0; n < numBars; n++) {
      bar_x = n * (CANVAS_WIDTH / numBars);
      bar_width = 2;
      bar_height = -(data[n] / 6);
      context.fillRect(bar_x, canvas.height, bar_width, bar_height);
    }
  }

  // The Archimedean spiral is expressed as r=a+b(angle).
  // Convert that into x, y coordinate, it will be expressed as:
  // x=(a+b*angle)*cos(angle)
  // y=(a+b*angle)*sin(angle)
  // Returns the (x, y) point to draw at to form the spiral.
  addSpiral(i, startingPoint, color) {
    this.drawSpiral(i, startingPoint, color);
    this.shapeArr.push({
      type: Shape.SPIRAL,
      i,
      startingPoint,
      color,
    });
=======
    context.closePath();
    context.fill();
>>>>>>> upstream/master
  }

  drawSquare() {
    // TODO(week 3): Implement.
  }

<<<<<<< HEAD

  // Generates a random set of points (x, y) for a certain range [min, max] (inclusive)
  generateRandomPoint() {
    return {
      x: generateRandomValue(0, 1000),
      y: generateRandomValue(0, 600)

    };
=======
  drawCircle() {
    // TODO(week 3): Implement.
    // See here for more information:
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
>>>>>>> upstream/master
  }

  drawBackground(canvas, canvasDimensions, color = BACKGROUND_COLOR) {
    const context = canvas.getContext("2d");
    context.canvas.width = canvasDimensions.width;
    context.canvas.height = canvasDimensions.height;
    context.fillStyle = color;
    context.fillRect(0, 0, canvasDimensions.width, canvasDimensions.height);
  }
<<<<<<< HEAD

  drawLine(startPoint, endPoint, lineProperties) {
    const canvas = this.canvas;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
    context.lineTo(endPoint.x, endPoint.y);
    context.lineWidth = lineProperties.width || WIDTH;
    context.strokeStyle = lineProperties.color || COLOR;
    context.stroke();
  }

  drawSemiCircle(startPoint, radius, startAngle, endAngle, width, color) {
    const canvas = this.canvas;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.arc(startPoint.x, startPoint.y, radius, startAngle, endAngle);
    context.lineWidth = width;
    context.strokeStyle = color;
    context.stroke();
    context.closePath();
  }

  addCircle(centerPoint, radius, circleProperties) {
    this.drawCircle(centerPoint, radius, circleProperties);

    const shapeObj = {
      type: Shape.CIRCLE,
      radius,
      point: centerPoint,
      color: circleProperties.color,
      width: circleProperties.width,
    }
    this.shapeArr.push(shapeObj);
  }

  drawCircle(centerPoint, radius, circleProperties) {
      const color = circleProperties.color || COLOR;
      const context = canvas.getContext("2d");
      context.fillStyle = color;
      context.beginPath();
      context.arc(centerPoint.x, centerPoint.y, radius, 0, 2 * Math.PI);
      context.fill();
      context.lineWidth = circleProperties.width || WIDTH;
      context.strokeStyle = color;
      context.stroke();
  }

  drawSquigglyLine(startPoint, radius, lineProperties) {
      const width = lineProperties.width || WIDTH;
      const color = lineProperties.color || COLOR;
      const context = canvas.getContext("2d");

      const endPoint = {
        x: startPoint.x + 6 * radius,
        y: startPoint.y,
      };

      const vector = {
        x: endPoint.x - startPoint.x,
        y: endPoint.y - startPoint.y,
      };
      const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
      const normalVector = {
        x: vector.x / length,
        y: vector.y / length,
      };

      this.drawSemiCircle(
        {x: startPoint.x, y: startPoint.y},
        radius,
        0,
        Math.PI,
        width,
        color);
      this.drawSemiCircle(
        {x: (startPoint.x + 2 * radius), y: startPoint.y},
        radius,
        Math.PI,
        0,
        width,
        color);
      this.drawSemiCircle(
        {x: (startPoint.x + 4 * radius), y: startPoint.y},
        radius,
        0,
        Math.PI,
        width,
        color);
      this.drawSemiCircle(
        {x: endPoint.x, y: endPoint.y},
        radius,
        Math.PI,
        0,
        width,
        color);
  }
=======
>>>>>>> upstream/master
}


/**
 * Generates a hexadecimal random color.
 */
function generateRandomColor() {
  const color = generateRandomValue(0x0, 0xFFFFFF);
  return '#' + color.toString(16);
}

/**
 * Generates a random value between [min, max] (inclusive).
 */
function generateRandomValue(minValue = 1, maxValue = 10) {
  min = Math.ceil(minValue);
  max = Math.floor(maxValue);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomPoint() {
  // TODO:
  // Use generateRandomValue to create a ranom x and a random y value.
  // HINT: we can use the constants CANVAS_HEIGHT and CANVAS_WIDTH for the max
  //     x and y values.
  return {
    x: 0,
    y: 0,
  };
}
