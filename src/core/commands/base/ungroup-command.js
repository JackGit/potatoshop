import Command from '../command'
import { group, ungroup } from '../../utils/group'

export default class UngroupCommand extends Command {

  constructor (layer) {
    super(layer)
    this.layers = []
  }

  execute () {
    this.layers = ungroup(this.layer)
    this.layer = null
  }

  undo () {
    if (this.layers.length === 0) {
      return
    }

    this.layer = group(this.layers)
  }
}
