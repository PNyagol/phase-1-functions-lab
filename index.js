function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
  }


  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }


  function distanceTravelledInFeet(start, destination) {
    const blocksTraveled = Math.abs(start - destination);
    return blocksTraveled * 264;
  }


  function calculatesFarePrice(start, destination) {
    const feetTraveled = distanceTravelledInFeet(start, destination);
  
    if (feetTraveled <= 400) {
      return 0;
    } else if (feetTraveled <= 2000) {
      return (feetTraveled - 400) * 0.02;
    } else if (feetTraveled <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
  }
  }
