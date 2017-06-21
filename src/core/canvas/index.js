/**
 * to contain images,
 * it can be set pixelRatio
 * canvas.addImage
 * canvas.removeImage
 * canvas.hideImage
 * canvas.mergeImages
 * canvas.reorder
 */

import CenterIt from 'center-it'

export default class Canvas {

  constructor () {
    this.width = 200
    this.height = 200
    this._pixelRatio = 2
    this.layers = []
    this.selection = []
  }

  add () {

  }

  remove () {

  }

  reorder (layer, newPosition) {

  }

  get pixelRatio () {
    return this._pixelRatio
  }

  set pixelRatio (ratio) {
    this._pixelRatio = ratio
  }

  resize () {

  }

  clear () {

  }

  clone () {
    
  }
}
