import Command from '../command'

export default class CancelGroupCommand extends Command {

  constructor (layer) {
    super(layer)
  }

  execute () {
    let parent = this.layer.parent

    // make all direct children layers has parent of grouped layer
    this.layer.children.forEach(child => {
      child.parent = parent
    })

    // remove grouped layer itself
  }

  undo () {

  }
}
