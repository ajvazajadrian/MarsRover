// Rover Object Goes Here
// ======================
const rover = {
  direction: 'N',
  x: 0,
  y: 0,
};

// ======================
function turnLeft(roverDirection) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case 'N':
       rover.direction = 'W';
      console.log("The Rover is now facing West");
      break;
    case 'W':
      rover.direction = 'S'
      console.log('The Rover is now facing South');
      break;
    case 'S':
        rover.direction = 'E';
        console.log('The Rover is now facing East');
        break;
    case 'E':
      rover.direction = 'N';
      console.log('The Rover is now facing North');
      break;
      default:
        console.log('Something went wrong');
        break;
  } 
};
turnLeft()
console.log(rover.direction)


function turnRight(roverDirection) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case 'N':
       rover.direction = 'E';
      console.log("The Rover is now facing East");
      break;
    case 'E':
      rover.direction = 'S'
      console.log('The Rover is now facing South');
      break;
    case 'S':
        rover.direction = 'W';
        console.log('The Rover is now facing West');
        break;
    case 'W':
      rover.direction = 'N';
      console.log('The Rover is now facing North');
      break;
      default:
        console.log('Something went wrong');
        break;
  } 
}

turnRight()
console.log(rover.direction)

function moveForward(roverDirection) {
  console.log("moveForward was called");
}

