import EventEmitter from 'eventemitter3'

export default class DisplayObject extends EventEmitter {

  constructor () {
    super()
    this.parent = null
  }
}
