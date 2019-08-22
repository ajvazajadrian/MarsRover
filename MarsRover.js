// Rover Object Goes Here
// ======================
const rover1 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

const rover2 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

const rover3 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================
function turnLeft(marsRover) {
  console.log("turnLeft was called!");
  switch (marsRover.direction) {
    case "N":
      marsRover.direction = "W";
      console.log("The Rover is now facing West");
      break;
    case "W":
        marsRover.direction = "S";
      console.log("The Rover is now facing South");
      break;
    case "S":
        marsRover.direction = "E";
      console.log("The Rover is now facing East");
      break;
    case "E":
        marsRover.direction = "N";
      console.log("The Rover is now facing North");
      break;
    default:
      console.log("Something went wrong");
      break;
  }
  console.log(`Rovers has position: x: ${marsRover.x}, y: ${marsRover.y}`);
}

function turnRight(marsRover) {
  console.log("turnRight was called!");
  switch (marsRover.direction) {
    case "N":
      marsRover.direction = "E";
      console.log("The Rover is now facing East");
      break;
    case "E":
      marsRover.direction = "S";
      console.log("The Rover is now facing South");
      break;
    case "S":
      marsRover.direction = "W";
      console.log("The Rover is now facing West");
      break;
    case "W":
      marsRover.direction = "N";
      console.log("The Rover is now facing North");
      break;
    default:
      console.log("Something went wrong");
      break;
  }
  console.log(`Rovers has position: x: ${marsRover.x}, y: ${marsRover.y}`);
}


function moveForward(marsRover) {
  console.log("moveForward was called");
  
    switch (marsRover.direction) {
      case "N":
        if(marsRover.y > 0){
        marsRover.y--;
        }else{
          console.log("You can´t plave player outside of the board!")
        }
        break;
      case "E":
          if(marsRover.x < 9){
            marsRover.x++;
            }else{
              console.log("You can´t plave player outside of the board!")
            }
        break;
      case "S":
          if(marsRover.y < 9){
            marsRover.y++;
            }else{
              console.log("You can´t plave player outside of the board!")
            }
        break;
      case "W":
          if(marsRover.x > 0){
            marsRover.x--;
            }else{
              console.log("You can´t plave player outside of the board!")
            }
        
        break;
      default:
        console.log("Something went wrong");
        break;
    }
    console.log(`Rovers has position: x: ${marsRover.x}, y: ${marsRover.y}`);


  
  let newPosition = { x: marsRover.x, y: marsRover.y };
  marsRover.travelLog.push(newPosition);
};



function moveBackward(marsRover) {
    console.log("moveBackward was called");
      switch (marsRover.direction) {
        case "N":
          if(marsRover.y < 9){
          marsRover.y++;
        }else{
          console.log("You can´t plave player outside of the board!")
        }
        break;
        case "E":
        if(marsRover.x > 0){
          marsRover.x--;
        }else{
          console.log("You can´t plave player outside of the board!")
              }
          break;
        case "S":
        if(marsRover.y > 0){
          marsRover.y--;
        }else{
console.log("You can´t plave player outside of the board!")
                }
        break;
        case "W":
        if(marsRover.x < 9){
          marsRover.x++;
        }else{
          console.log("You can´t plave player outside of the board!")
        }
        break;
        default:
        console.log("Something went wrong");
        break;
        }
        
         
        console.log(`Rovers has position: x: ${marsRover.x}, y: ${marsRover.y}`);
  
  let newPosition = { x: marsRover.x, y: marsRover.y };
  marsRover.travelLog.push(newPosition);
}





function command(marsRover, userInput) {
userInput =  userInput.toLowerCase()

  for (let i = 0; i < userInput.length; i++) {
    let order = userInput[i];
    switch (order) {
      case "r": //right
        turnRight(marsRover);
        break;
      case "l":
        turnLeft(marsRover);
        break;
      case "f":
        moveForward(marsRover);
        break;
      case "b":
        moveBackward(marsRover);
        break;
      default:
        console.log("please enter a valid command");
    }

  }
}
console.log("**********************");
console.log(rover1)


command(rover1, 'lbb')