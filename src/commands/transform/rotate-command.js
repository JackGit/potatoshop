import Command from '../command'

export default class RotateCommand extends Command {

  constructor (layer, rotation) {
    super(layer)
    this.targetRotation = rotation
    this.originRotation = this.layer.rotation
  }

  execute () {
    this.layer.rotation = this.targetRotation
  }

  undo () {
    this.layer.rotation = this.originRotation
  }
}
