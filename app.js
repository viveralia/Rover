// Rover Object Goes Here
// ======================
const mainRover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }]
}

/*****************
 *** Functions ***
 ****************/

// Turn Left
// ======================
function turnLeft(rover) {
  console.log('turnLeft was called!')
  // Changing the direction when turning
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W'
      break
    case 'W':
      rover.direction = 'S'
      break
    case 'S':
      rover.direction = 'E'
      break
    case 'E':
      rover.direction = 'N'
      break
  }
  console.log(`Rover is now facing ${rover.direction}`)
}

// Turn Right
// ======================
function turnRight(rover) {
  console.log('turnRight was called!')
  // Changing the direction when turning
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E'
      break
    case 'E':
      rover.direction = 'S'
      break
    case 'S':
      rover.direction = 'W'
      break
    case 'W':
      rover.direction = 'N'
      break
  }
  console.log(`Rover is now facing ${rover.direction}`)
}

// Sets the coordinates after moving
// ======================
function setCoordinates(rover) {
  // Pushes each new position to the travel log array
  const currentPosition = { x: rover.x, y: rover.y }
  rover.travelLog = [...rover.travelLog, currentPosition]

  // Prints the new position
  console.log(
    `%cCurrent Position: [${currentPosition.x}, ${currentPosition.y}]`,
    'color: papayawhip;'
  )
}

// Out of the grid warning message
// ======================
const outOfTheGrid = () =>
  console.log(
    '%c🚧Warning \n\nIf the rover moves, it will get out of the grid!',
    'color: orange; font-weight: bold;'
  )

// Move Forward
// ======================
function moveForward(rover) {
  console.log('moveForward was called')

  // Enforcing boundaries
  // The rover would get out of the grid (10x10) if it's on the borders (0 or 9) and tries to move in certain directions:
  if (
    // x = 0 and moves to the left
    (rover.x === 0 && rover.direction === 'W') ||
    // x = 9 and moves to the right
    (rover.x === 9 && rover.direction === 'E') ||
    // y = 0 and moves up
    (rover.y === 0 && rover.direction === 'N') ||
    // y = 9 and moves down
    (rover.y === 9 && rover.direction === 'S')
  ) {
    outOfTheGrid()
  } else {
    // Increasing/decreasing the x/y position according to the direction
    switch (rover.direction) {
      case 'N':
        rover.y--
        break
      case 'S':
        rover.y++
        break
      case 'E':
        rover.x++
        break
      case 'W':
        rover.x--
        break
    }

    setCoordinates(rover)
  }
}

// Move Backward
// ======================
function moveBackward(rover) {
  console.log('moveBackward was called')

  // Enforcing boundaries (backwards)
  // The rover would get out of the grid (10x10) if it's on the borders (0 or 9) and tries to move in certain directions:
  if (
    // x = 0 and moves to the left
    (rover.x === 0 && rover.direction === 'E') ||
    // x = 9 and moves to the right
    (rover.x === 9 && rover.direction === 'W') ||
    // y = 0 and moves up
    (rover.y === 0 && rover.direction === 'S') ||
    // y = 9 and moves down
    (rover.y === 9 && rover.direction === 'N')
  ) {
    outOfTheGrid()
  } else {
    // Increasing/decreasing the x/y position according to the direction
    switch (rover.direction) {
      case 'N':
        rover.y++
        break
      case 'S':
        rover.y--
        break
      case 'E':
        rover.x--
        break
      case 'W':
        rover.x++
        break
    }

    setCoordinates(rover)
  }
}

// Commands
// ======================
function commands(rover, commandList) {
  // Iterates over the command list (each letter of the string)
  for (let i = 0; i < commandList.length; i++) {
    // Lists each command (Command #...)
    console.log(
      `%cCommand #${i + 1}`,
      'color: turquoise; text-decoration: underline;'
    )

    // Translates each letter as a instruction for the rover
    // toLowerCase to prevent mistakes (L -> l)
    switch (commandList[i].toLowerCase()) {
      case 'f':
        moveForward(rover)
        break
      case 'b':
        moveBackward(rover)
        break
      case 'l':
        turnLeft(rover)
        break
      case 'r':
        turnRight(rover)
        break
      // Input validation
      default:
        console.log(
          `%c🚫 Error \n\n"${
            commandList[i]
          }" is not a valid input. \nUse f, b, r or l only`,
          'color: orangered; font-weight: bold;'
        )
        break
    }
  }

  // Prints the travel log in a table format
  console.table(rover.travelLog)
}

/************************
 *** Moving the rover ***
 ************************/
commands(mainRover, 'rffbbbx')
