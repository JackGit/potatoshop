let layerCount = 0

export default class Layer {

  constructor () {
    // attributes
    this.id = (layerCount++)
    this._parent = null
    this._children = []

    this._name = ''
    this._width = 0
    this._height = 0
    this._zIndex = 1
    this._alpha = 1
    this._filter = ''
    this._position = { x: 0, y: 0 }
    this._rotation = { x: 0, y: 0 }
    this._scale = { x: 1, y: 1 }
    this._flip = { v: false, h: false }

    // status
    this._locked = false
    this._selected = false
  }

  get name () {
    return this._name
  }

  set name (name) {
    this._name = name
  }

  get position () {
    return this._position
  }

  set position () {
    if (arguments.length === 1) {
      this._position = arguments[0]
    } else if (arguments.length === 2) {
      this._position = { x: arguments[0], y: arguments[1] }
    } else {
      console.error('Layer set position: invalid arguments')
    }
  }

  get width () {
    return this._width
  }

  set width (width) {
    this._width = width
  }

  get height () {
    return this._height
  }

  set height (height) {
    this._height = height
  }

  get alpha () {
    return this._alpha
  }

  set alpha (alpha) {
    this._alpha = alpha
  }

  lock () {
    this._locked = true
  }

  unlock () {
    this._locked = false
  }

  isLocked () {
    return this._locked
  }

  select () {
    this._selected = true
  }

  unselect () {
    this._selected = false
  }

  isSelected () {
    return this._selected
  }

  clone () {

  }

  /**
   * add another layer as child of this layer
   * @param {[type]} layer [description]
   */
  addChild (layer) {
    // dettach from origin parent
    layer.parent.removeChild(layer)

    // attach to this layer
    layer.parent = this
    this.children.push(layer)
  }

  removeChild (layer) {
    // find the layer by id, name, index, or the layer object itself
    let index = this.children.indexOf(layer)
    this.children.splice(index, 1)
    layer.parent = null
  }
}
