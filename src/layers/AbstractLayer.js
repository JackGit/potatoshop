export default class AbstractLayer extends PIXI.Container {

  constructor () {
    super()
    this.isLocked = false
    this.isFixedRatioScale = false
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
