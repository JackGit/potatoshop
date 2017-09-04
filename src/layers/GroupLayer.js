import AbstractLayer from './AbstractLayer'

export default class GroupLayer extends AbstractLayer {

  constructor () {
    super()
    this.children = []
  }

  ungroup () {}
}
