import DisplayObject from './DisplayObject'

export default class Container extends DisplayObject {

  constructor () {
    super()
    this.children = []
  }

  addChild (child) {
    if (child.parent) {
      child.parent.removeChild(child)
    }

    child.parent = this
    this.children.push(child)
  }

  removeChild (child) {
    const children = this.children
    const index = children.indexOf(child)

    if (index === -1) {
      return null
    }

    child.parent = null
    children.splice(index, 1)

    return child
  }

  getChildByName (name) {
    // TODO
  }

  getChildAt (index) {
    if (index < 0 || index > this.children.length) {
      throw new Error(`getChildAt: Index (${index}) does not exist.`)
    }
    return this.children[index]
  }

  getChildIndex (child) {
    return this.children.indexOf(child)
  }
}
