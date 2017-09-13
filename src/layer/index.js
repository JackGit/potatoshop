export default class Layer extends PIXI.Container {

  constructor () {
    super()
    this.isLocked = false
    this.isFixedRatioScale = false
    this.state = null

    this.editorAgent
    this.loadorAgent
    this.selectorAgent
    this.transformerAgent
  }

  destroy () {}

  copy () {}

  // lock is main about: lock position and size
  // locked layer can't be grouped, transformed, deleted
  // but it can be set shadow, z-index, alpha and unlock
  lock () {}
  unlock () {}
  delete () {}

  onHover () {}
  onClick () {}
  onDoubleClick () {}
}
