/**
 * usage:
 *    let domRenderer = new DOMRenderer()
 *    containerElement.appendChild(domRenderer.domElement)
 *    domRenderer.render(canvas)
 */

import Renderer from './renderer'
import { centerPoint } from '../utils/geometry'
import { transform } from '../utils/dom-transform'

export default class DOMRenderer extends Renderer {

  constructor () {
    super()
  }

  _getLayerDom (layer, factory) {
    if (!this._domCache[layer.id]) {
      let dom = factory()
      this.domElement.appendChild(dom)
      this._domCache[layer.id] = img
    }

    return this._domCache[layer.id]
  }

  _renderLayer (layer) {
    layer.draw(this)
  }

  render (canvas) {
    // renderer every layer
    // if dom not created for that layer, create one
    // or, modify the dom
    let layers = canvas.children
    layers.forEach(layer => {
      if (!layer.isHidden()) {
        this._renderLayer(layer)
      }
    })
  }

  resize () {

  }

  drawImage (layer) {
    let img = this._getLayerDom(layer, () => document.createElement('img'))

    img.src = layer.imageUrl
    img.width = layer.width
    img.height = layer.height
    img.style.position = 'absolute'
    img.style.top = 0
    img.style.left = 0
    img.style.zIndex = layer.zIndex
    img.style.opacity = layer.alpha
    img.style.transform = transform()
      .translate(layer.position.x, layer.position.y)
      .rotate(layer.rotation.x, layer.rotation.y)
      .scale(layer.scale.x, layer.scale.y)
      .toString()
  }

  drawGroup () {
    
  }
}
