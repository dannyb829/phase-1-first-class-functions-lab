// Code your solution in this file!
const returnFirstTwoDrivers = x => x.slice(0,2)

const returnLastTwoDrivers =  x => x.slice((x.length - 2), x.length)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(n) {
    return x => x * n
}

function fareDoubler(fare) {
   const doubledFare = createFareMultiplier(2);
  return doubledFare(fare)
}

function fareTripler(fare) {
   const tripledFare = createFareMultiplier(3);
  return tripledFare(fare)  
}

function selectDifferentDrivers(drivers, func) {
  return func(drivers)
}

