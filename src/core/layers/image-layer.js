import Layer from '.layer'

export default class ImageLayer extends from Layer {

  constructor () {
    super()
    this.imageUrl = ''
  }

  // onimageloaded
  //
  draw (renderer) {
    renderer.drawImage(this)
  }
}
