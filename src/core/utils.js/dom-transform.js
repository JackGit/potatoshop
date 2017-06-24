const TRANSFORM_METHODS = [
  'translate', 'translate3d', 'translateX', 'translateY', 'translateZ',
  'scale', 'scale3d', 'scaleX', 'scaleZ',
  'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ',
  'skew', 'skewX', 'skewY',
  'matrix', 'matrix3d',
  'perspective'
]

/**
 * usage: transform().translateX(10).scale(1, 0.5).rotateX('10deg').toString()
 * @return {[type]} [description]
 */
export default function transform () {
  let actions = []
  let returnObj = {}

  TRANSFORM_METHODS.forEach(method => {
    returnObj[method] = function () {
      actions.push({
        method,
        params: Array.prototype.slice.call(arguments)
      })
      return returnObj
    }
  })

  returnObj.reset = function () { actions = [] }
  returnObj.toString = function () {
    return actions.map(({ method, params }) => method + '(' + params.join(',') + ')').join(' ')
  }

  return returnObj
}
