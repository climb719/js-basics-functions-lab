const headquarters = 42

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(headquarters - someValue)
  }
  
  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distanceFromHqInBlocks(someValue) * 264
  }

  function distanceTravelledInFeet(start, destination) {
    // Calculates the number of feet a passenger travels given a starting block and an ending block
    // a block is 264 feet long
    return Math.abs(start - destination) * 264
  } 

  function calculatesFarePrice(start, destination) {
//     // Given the same starting and ending block as the previous test, return the fare for the customer
//     // the price is 2 cents per foot (not including 400, which are free
//     // lat fare for a distance over 2000 feet and under 2500 feet
//     //does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400 ) {
        return 0
    } else if (distance >= 400 && distance <= 2000 ) {
        return .02 * (distance - 400) 
    } else if (distance > 2000 && distance < 2500 ) {
      return 25
    } else {
      return 'cannot travel that far'
    }
  }
