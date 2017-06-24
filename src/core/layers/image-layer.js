import Layer from '.layer'

export default class ImageLayer extends from Layer {

  constructor () {
    super()
    this.imageUrl = ''
  }

  // onimageloaded
}

ImageLayer.domRenderer = function () {
  let img = document.createElement('img')
  img.src = this.imageUrl
  img.width = this.width
  img.height = this.height
  img.style.position = 'absolute'
  img.style.top = this.position.y + 'px'
  img.style.left = this.position.x + 'px'
  img.style.opacity = this.alpha
}
