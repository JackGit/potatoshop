import Command from '../command'

export default class AddCommand extends Command {

  constructor (layer, child) {
    super(layer)
    this.childLayer = child
  }

  execute () {
    this.layer.addChild(this.childLayer)
  }

  undo () {
    this.layer.removeChild(this.childLayer)
  }
}
