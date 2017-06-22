import Layer from '.layer'

export default class TextLayer extends Layer {

  constructor () {
    super()

    this._textContent = ''
    this._textColor = '#000'
    this._fontSize = 14
    this._fontFamily = ''
  }

  get textContent () {
    return this._textContent
  }

  set textContent (text) {
    this._textContent = text
  }
}
