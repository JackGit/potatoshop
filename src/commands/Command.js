/**
 * base action class of every actions for layers,
 * actions can undo and redo
 */
export default class Command {

  constructor (layer) {
    this.layer = layer
  }

  execute () {}

  undo () {}
}
