import Command from '../command'

export default class AddCommand extends Command {

  constructor (layer, child) {
    super(layer)
    this.childLayer = child
  }

  execute () {
    this.layer.add(this.childLayer)
  }

  undo () {
    this.layer.remove(this.childLayer)
  }
}
