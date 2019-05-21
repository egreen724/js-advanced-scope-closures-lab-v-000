function produceDrivingRange(blockRange) {
  return function inRange(startingPoint, endingPoint) {
      let result = startingPoint - endingPoint
    if (result < blockRange) {
      return `within range by ${result}`
    }
    else {
      return `${result} blocks out of range`
    }
  }
}
