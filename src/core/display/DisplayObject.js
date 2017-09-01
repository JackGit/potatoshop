import EventEmitter from 'eventemitter3'
import Transform from './Transform'

let displayObjectCount = 0

export default class DisplayObject extends EventEmitter {

  constructor () {
    super()

    this.id = (displayObjectCount++)
    this.name = ''
    this.parent = null

    this.transform = new Transform()
    this.alpha = 1
    this.worldAlpha = 1

    this._width = 0
    this._height = 0
    this._zIndex = 1
  }

  destroy () {}

  setParent (parent) {
    if (!parent || !parent.addChild) {
      throw new Error('setParent: Argument must be a Container')
    }

    parent.addChild(this)
  }

  get pivot () {

  }

  set pivot (value) {

  }

  get position () {
    return this.transform.position
  }

  set position (value) {
    this.transform.position = value
  }

  get rotation () {
    return this.transform.rotation
  }

  set rotation (value) {
    this.transform.rotation = value
  }

  get scale () {

  }

  set scale (value) {

  }

  get skew () {

  }

  set skew (value) {

  }

  get x () {
    return this.position.x
  }

  set x (value) {
    this.transform.position.x = value
  }

  get y () {
    return this.position.y
  }

  set y (value) {
    this.transform.position.y = value
  }
}
