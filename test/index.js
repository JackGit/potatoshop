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

canvas.addLayer(shapeLayer)



canvas.selectLayer(imageLayer)

canvas.selectLayer(imageLayer, shapeLayer)

canvas.clearSelection()
