function produceDrivingRange(blockRange) {
  return function inRange(startingPoint, endingPoint) {
      let result = parseInt(startingPoint.slice(-2)) - parseInt(endingPoint.slice(-2))
    if (result < blockRange) {
      return `within range by ${result}`
    }
    else {
      return `${result} blocks out of range`
    }
  }
}
