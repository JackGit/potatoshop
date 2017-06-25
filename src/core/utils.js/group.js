import Layer from '../layers/layer'

export function group (layers) {
  let newLayer = new Layer()
  let parent = layers[0].parent

  layers.forEach(layer => newLayer.addChild(layer))
  parent.addChild(newLayer)

  return newLayer
}

export function ungroup (layer) {
  let parent = layer.parent
  let children = layer.children.slice()

  children.forEach(child => parent.addChild(child))
  parent.removeChild(layer)

  return children
}
