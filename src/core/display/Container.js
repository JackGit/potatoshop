import DisplayObject from './DisplayObject'

export default class Container extends DisplayObject {

  constructor () {
    super()
    this.children = []
  }

  addChild (child) {}

  removeChild (child) {}

  getChildByName (name) {}

  getChildByIndex (index) {}
}
