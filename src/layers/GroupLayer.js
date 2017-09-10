import Layer from '../layer'

export default class GroupLayer extends Layer {

  constructor () {
    super()
    this.children = []
  }

  ungroup () {}
}
