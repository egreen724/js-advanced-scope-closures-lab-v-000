function produceDrivingRange(blockRange) {
  return function inRange(startingPoint, endingPoint) {
      let result =  Number(endingPoint.slice(0, -2)) - Number(startingPoint.slice(0, -2))
    if (result <= blockRange) {
      return `within range by ${Math.abs(blockRange - result)}`
    }
    else {
      return `${Math.abs(blockRange - result)} blocks out of range`
    }
  }
}

function produceTipCalculator(tipRate) {
  return function tipCalculator(fare) {
    fare * tipRate
  }
}
