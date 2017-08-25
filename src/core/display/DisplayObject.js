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

  setParent (parent) {
    if (!parent || !parent.addChild) {
      throw new Error('setParent: Argument must be a Container')
    }

    parent.addChild(this)
  }

  destroy () {}
}
