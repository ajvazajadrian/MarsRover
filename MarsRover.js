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

/* I chose this method instead of the if method in the exercise because in the previous and and in 
the examples if the rover was at 0.0, it turned out to be true. 
this allowed me to to perform an action so i could reach -1 */

function moveForward(roverDirection) {
  console.log("moveForward was called");
  
    switch (rover.direction) {
      case "N":
        if(rover.y > 0){
        rover.y--;
        }else{
          console.log("You can´t plave player outside of the board!")
        }
        break;
      case "E":
          if(rover.x < 9){
            rover.x++;
            }else{
              console.log("You can´t plave player outside of the board!")
            }
        break;
      case "S":
          if(rover.y < 9){
            rover.y++;
            }else{
              console.log("You can´t plave player outside of the board!")
            }
        break;
      case "W":
          if(rover.x > 0){
            rover.x--;
            }else{
              console.log("You can´t plave player outside of the board!")
            }
        
        break;
      default:
        console.log("Something went wrong");
        break;
    }
    console.log(`Rovers has position: x: ${rover.x}, y: ${rover.y}`);


  
  let newPosition = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPosition);
};


/* I chose this method instead of the if method in the exercise because in the previous and and in 
the examples if the rover was at 0.0, it turned out to be true. 
this allowed me to to perform an action so i could reach -1 */

function moveBackward(roverDirection) {
    console.log("moveBackward was called");
      switch (rover.direction) {
        case "N":
          if(rover.y < 9){
          rover.y++;
        }else{
          console.log("You can´t plave player outside of the board!")
        }
        break;
        case "E":
        if(rover.x > 0){
          rover.x--;
        }else{
          console.log("You can´t plave player outside of the board!")
              }
          break;
        case "S":
        if(rover.y > 0){
          rover.y--;
        }else{
console.log("You can´t plave player outside of the board!")
                }
        break;
        case "W":
        if(rover.x < 9){
          rover.x++;
        }else{
          console.log("You can´t plave player outside of the board!")
        }
        break;
        default:
        console.log("Something went wrong");
        break;
        }
        
         
        console.log(`Rovers has position: x: ${rover.x}, y: ${rover.y}`);
  
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
        console.log("please enter a valid command");
    }

  }
}
console.log("**********************");
console.log(rover)

// turnLeft()
// turnLeft()
// moveForward()
// turnLeft()
// moveForward()
// moveForward()

command('bbblbbbbbbbbbblbbbbbffffffffff')