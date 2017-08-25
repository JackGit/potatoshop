/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 */

export default class Point {

  constructor (x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  clone () {
    return new Point(this.x, this.y)
  }

  copy (p) {
    this.set(p.x, p.y)
  }

  equals (p) {
    return (p.x === this.x) && (p.y === this.y)
  }

  set (x, y) {
    this.x = x || 0
    this.y = y || ((y !== 0) ? this.x : 0)
  }
}
