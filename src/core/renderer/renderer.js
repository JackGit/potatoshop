export default class Renderer {

  constructor () {
    this.domElement = null
    this._domCache = {}

    this._backgroundColor = '#000'
    this._width = 200
    this._height = 200
    this._pixelRatio = 2

    this._createDomElement()
  }

  _createDomElement () {
    let dom = document.createElement('div')
    dom.name = 'renderer-dom-element'
    dom.style.position = 'relative'
    dom.style.width = this._width + 'px'
    dom.style.height = this._height + 'px'
    this.domElement = dom
  }

  drawImage (imageUrl) {

  }

  drawText () {

  }

  drawRect () {

  }

  drawCircle () {

  }

  render (canvas) {}

  resize (width, height) {
    this._width = width
    this._height = height
  }
}
