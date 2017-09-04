const canvas = new Canvas()

const imageLayer = new ImageLayer({
  imageUrl: '',
  width,
  height
})
imageLayer.position.x = 10
imageLayer.position.y = 10

canvas.addLayer(imageLayer)


const shapeLayer = new ShapeLayer({
  width,
  height
})
shapeLayer.position.x = shapeLayer.position.y = 10

canvas.addLayer(shapeLayer) // DisplayObject::added event
canvas.removeLayer(layer) // DisplayObject::removed event

canvas.select(imageLayer) // Canvas::select event
canvas.select(imageLayer, shapeLayer)
canvas.deselect(imageLayer) // canvas::deselect event
canvas.deselect(imageLayer, shapeLayer)
canvas.clearSelection() // canvas::select event

canvas.group() // group selected layers Canvas::group event

canvas.getLayerByIndex()

canvas.setZOrder(layer, z)
canvas.zOrderUp(layer)
canvas.zOrderDown(layer)

/* transform layer should emit transform event */

const layer = canvas.getSelection()[0]
layer.copy()
layer.lock()
layer.unlock()
layer.remove()
layer.ungroup()

// special
layer.clip(imageLayer)

// set attribute
layer.setAttribute('name', value)

layer.position.x
layer.position.y
layer.scale
layer.rotation.x
layer.rotation.y
layer.alpha
