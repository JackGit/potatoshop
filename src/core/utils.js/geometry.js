/**
 * get bounding rectangle of a layer or layers
 * @param  {[type]} layers [description]
 * @return {Object}        { top, right, bottom, left, width, height }
 */
export function getBoundingRect (layers) {
  if (Array.isArray(layers)) {

  } else {

  }
}

export function centerPoint (layer) {
  return {
    x: layer.position.x + layer.width / 2,
    y: layer.position.y + layer.height / 2
  }
}
