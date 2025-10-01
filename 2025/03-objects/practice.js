class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  moveBy(x, y) {
    this.x += x;
    this.y += y;
  }
  equals(point) {
    return point.x === this.x && point.y === this.y;
  }
}

class Rectangle {
  constructor(x, y, w, h) {
    this.position = new Point(x, y);
    this.size = new Point(w, h);
  }
  move(x, y) {
    this.position.move(x, y);
  }
}
