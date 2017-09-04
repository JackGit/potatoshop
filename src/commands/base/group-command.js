import Command from '../command'
import { group, ungroup } from '../../utils/group'

export default class GroupCommand extends Command {

  constructor (layers) {
    super(null)

    // layers to be grouped together
    this.layers = layers
  }

  execute () {
    this.layer = group(this.layers)
  }

  undo () {
    if (!this.layer) {
      return
    }

    ungroup(this.layer)
    this.layer = null
  }
}
