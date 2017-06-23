/**
 * usage:
 *    let domRenderer = new DOMRenderer()
 *    containerElement.appendChild(domRenderer.domElement)
 *    domRenderer.render(canvas)
 */

import Renderer from './renderer'
import { centerPoint } from '../utils/geometry'

export default class DOMRenderer extends Renderer {

  constructor () {
    super()
  }

  _createLayerDom (layer) {
    let dom = document.createElement('z')
    this._domCache[layer.id] = dom
  }

  _updateLayerDom (layer) {
    let cacheDom = this._domCache[layer.id]
  }

  _renderLayer (layer) {
    if (this._domCache[layer.id]) {
      this._updateLayerDom(layer)
    } else {
      this._createLayerDom(layer)
    }
  }

  render (canvas) {
    // renderer every layer
    // if dom not created for that layer, create one
    // or, modify the dom
  }

  resize () {

  }
}

function renderLayer (renderer, layer) {

}
