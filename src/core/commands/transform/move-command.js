import Command from '../command'

export default class MoveCommand extends Command {

  constructor (layer, position) {
    super(layer)
    this.targetPosition = position
    this.originPosition = layer.position
  }

  execute () {
    this.layer.position = this.targetPosition
  }

  undo () {
    this.layer.position = this.originPosition
  }
}
