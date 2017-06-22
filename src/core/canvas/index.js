/**
 * to contain images,
 * it can be set pixelRatio
 * canvas.addImage
 * canvas.removeImage
 * canvas.hideImage
 * canvas.mergeImages
 * canvas.reorder
 */

import Layer from '../layers/layer'
import CenterIt from 'center-it'

export default class Canvas extends Layer {

  constructor () {
    super()
    this.isRoot = true
    this.selection = []
  }

  reorder (layer, newPosition) {

  }
}
