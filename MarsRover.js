// Rover Object Goes Here
// ======================
const rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================
function turnLeft(roverDirection) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("The Rover is now facing West");
      break;
    case "W":
      rover.direction = "S";
      console.log("The Rover is now facing South");
      break;
    case "S":
      rover.direction = "E";
      console.log("The Rover is now facing East");
      break;
    case "E":
      rover.direction = "N";
      console.log("The Rover is now facing North");
      break;
    default:
      console.log("Something went wrong");
      break;
  }
  console.log(`Rovers has position: x: ${rover.x}, y: ${rover.y}`);
}

function turnRight(roverDirection) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("The Rover is now facing East");
      break;
    case "E":
      rover.direction = "S";
      console.log("The Rover is now facing South");
      break;
    case "S":
      rover.direction = "W";
      console.log("The Rover is now facing West");
      break;
    case "W":
      rover.direction = "N";
      console.log("The Rover is now facing North");
      break;
    default:
      console.log("Something went wrong");
      break;
  }
  console.log(`Rovers has position: x: ${rover.x}, y: ${rover.y}`);
}

// moveForward

function moveForward(roverDirection) {
  console.log("moveForward was called");
  if (rover.x >= 0 && rover.x < 10 && rover.y >= 0 && rover.y < 10) {
    switch (rover.direction) {
      case "N":
        rover.y--;
        console.log(`Rovers has position: x: ${rover.x}, y: ${rover.y}`);
        break;
      case "E":
        rover.x++;
        console.log(`Rovers has position: x: ${rover.x}, y: ${rover.y}`);
        break;
      case "S":
        rover.y++;
        console.log(`Rovers has position: x: ${rover.x}, y: ${rover.y}`);
        break;
      case "W":
        rover.x--;
        console.log(`Rovers has position: x: ${rover.x}, y: ${rover.y}`);
        break;
      default:
        console.log("Something went wrong");
        break;
    }
  } else {
    console.log("You can´t plave player outside of the board!");
  } // right now not working, newPositions value is not read
  let newPosition = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPosition);
};




function moveBackward(roverDirection) {
  console.log("moveBackward was called");
  if (rover.x >= 0 && rover.x < 10 && rover.y >= 0 && rover.y < 10) {
    switch (rover.direction) {
      case "N":
        rover.y++;
        console.log(`Rovers has position: x: ${rover.x}, y: ${rover.y}`);
        break;
      case "E":
        rover.x--;
        console.log(`Rovers has position: x: ${rover.x}, y: ${rover.y}`);
        break;
      case "S":
        rover.y--;
        console.log(`Rovers has position: x: ${rover.x}, y: ${rover.y}`);
        break;
      case "W":
        rover.x++;
        console.log(`Rovers has position: x: ${rover.x}, y: ${rover.y}`);
        break;
      default:
        console.log("Something went wrong");
        break;
    }
  } else {
    console.log("You can´t plave player outside of the board!");
  }
  let newPosition = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPosition);
}





function command(userInput) {
  for (let i = 0; i < userInput.length; i++) {
    let order = userInput[i];
    switch (order) {
      case "r": //right
        turnRight(userInput);
        break;
      case "l":
        turnLeft(userInput);
        break;
      case "f":
        moveForward(userInput);
        break;
      case "b":
        moveBackward(userInput);
        break;
      default:
        console.log("something went wrong");
    }
    if (
      userInput !== "r" &&
      userInput !== "l" &&
      userInput !== "f" &&
      userInput !== "b"
    ) {
      console.log(
        "please enter a valid command" + " previus position" + travelLog
      );
    }
  }
}
console.log("**********************");
command("f");

console.log(rover.travelLog);

// Obstacles
// Obstavles for rover
// additional rovers, if rover crash into rover console log
