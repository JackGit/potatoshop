import Command from '../command'

export default class ScaleCommand extends Command {

  constructor (layer, scale) {
    super(layer)
    this.targetScale = scale
    this.originScale = this.layer.scale
  }

  execute () {
    this.layer.scale = this.targetScale
  }

  undo () {
    this.layer.scale = this.originScale
  }
}
