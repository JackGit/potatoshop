import Command from '../command'

export default class RemoveCommand extends Command {

  constructor (layer, child) {
    super(layer)
    this.childLayer = child
  }

  execute () {
    this.layer.remove(this.childLayer)
  }

  undo () {
    this.layer.add(this.childLayer)
  }
}
