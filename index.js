// Code your solution in this file!
const drivers = [`Antonia` , `Nuru` , `Amari` , `Mo`];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2)
const returnLastTwoDrivers = (drivers) => drivers.slice(2, 4)

let selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare){
        return fare * multiplier
    }
}

const fareQuintupler = createFareMultiplier(5)
const fareDoubler = (fare) => fare*2
const fareTripler = (fare) => fare*3

function selectDifferentDrivers (drivers, driverSelect) {
    return driverSelect(drivers)
}
//returnFirstTwoDrivers(drivers)
//returnLastTwoDrivers(drivers)
//selectingDrivers[1]
//selectingDrivers[0](drivers)
//fareQuintupler(5)
//fareDoubler(10)
//fareTripler(12)
//selectDifferentDrivers(drivers, returnFirstTwoDrivers)