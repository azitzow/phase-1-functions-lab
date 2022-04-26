// Code your solution in this file!
// head quarters is located on 42nd str
// distance in feet per block = 264

const distanceFromHqInFeet = function (street) {
  return 264 * distanceFromHqInBlocks(street);
}

const distanceFromHqInBlocks = function (street) {
  if (street < 42)
    { return 42 - street}
  return street - 42;
}

const distanceTravelledInFeet = function (start, destination) {
  let block;
  if (start > destination) {
    block = start - destination;
  } else {
    block = destination - start;
  }
  return block * 264;
}

const calculatesFarePrice = function (start, destination) {
  const feetTravelled = distanceTravelledInFeet(start, destination);
  let price;
  if (feetTravelled <= 400) {
    price = 0;
  } else if (feetTravelled > 400 && feetTravelled < 2000) {
    price = (feetTravelled - 400) * 0.02;
  } else if (feetTravelled > 2000 && feetTravelled < 2500) {
    price = 25;
  } else {
    price = 'cannot travel that far';
  }
  // switch (feetTravelled) {
  //   case feetTravelled <= 400:
  //     price = 0;
  //     break;
  //   case feetTravelled > 400 && feetTravelled < 2000:
  //     price = (feetTravelled - 400) * 0.02;
  //     break;
  //   case feetTravelled > 2000 && feetTravelled < 2500:
  //     price = 25;
  //     break;
  //   default:
  //     price = 'cannot travel that far';
  // }
  return price;
}