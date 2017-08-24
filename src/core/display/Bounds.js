import { Rectangle } from '../math'

/**
 * Builder pattern for bounds rectangles
 */
export default class Bounds {

  constructor () {
    this.minX = Infinity
    this.minY = Infinity
    this.maxX = -Infinity
    this.maxY = -Infinity
    this.rect = null
  }

  /**
   * Checks if bounds are empty
   */
  isEmpty () {
    return this.minX > this.maxX || this.minY > this.maxY
  }

  /**
   * Clears the bounds and resets
   */
  clear () {
    // this.updateID++ // TODO: what's the usage?
    this.minX = Infinity
    this.minY = Infinity
    this.maxX = -Infinity
    this.maxY = -Infinity
  }

    /**
     * Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle
     * It is not guaranteed that it will return tempRect
     */
    getRectangle (rect) {
      if (this.minX > this.maxX || this.minY > this.maxY) {
        return Rectangle.EMPTY
      }

      rect = rect || new Rectangle(0, 0, 1, 1)

      rect.x = this.minX
      rect.y = this.minY
      rect.width = this.maxX - this.minX
      rect.height = this.maxY - this.minY

      return rect
    }

    /**
     * Adds other Bounds
     */
    addBounds (bounds) {
      const { minX, minY, maxX, maxY } = this

      this.minX = bounds.minX < minX ? bounds.minX : minX
      this.minY = bounds.minY < minY ? bounds.minY : minY
      this.maxX = bounds.maxX > maxX ? bounds.maxX : maxX
      this.maxY = bounds.maxY > maxY ? bounds.maxY : maxY
    }
}
