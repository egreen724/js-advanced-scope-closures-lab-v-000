function produceDrivingRange(blockRange) {
  return function inRange(startingPoint, endingPoint) {
      let result =  Number(endingPoint.slice(0, -2)) - Number(startingPoint.slice(0, -2))
    if (result <= blockRange) {
      return `within range by ${blockRange - result}`
    }
    else {
      return `${blockRange - result} blocks out of range`
    }
  }
}
