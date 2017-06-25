import Layer from './layer'

export default class GroupLayer extends Layer {

  constructor () {
    super()
  }

  draw (renderer) {
    this.children.forEach(child => child.draw(renderer))
  }
}
