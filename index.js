// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  if (street >= 42) {
    return street - 42;
  } else {
    return 42 - street;
  };
};

function distanceFromHqInFeet(street) {
  if (street >= 42) {
    return (street - 42) * 264;
  } else {
    return (42 - street) * 264;
  };
  };

function distanceTravelledInFeet(start, end) {
  if (start >= end){
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  };

};

function calculatesFarePrice(start, distance){

  let distanceT = distanceTravelledInFeet(start, distance);
  if ( distanceT < 400){
    return 0;
  } else if (distanceT >= 400);
    if (distanceT <= 2000) {
    return (distanceT - 400) * .02;
  } else if (distanceT >2000);
    if (distanceT <= 2500){
      return 25;
    } else {
      return "cannot travel that far"
    }
};
