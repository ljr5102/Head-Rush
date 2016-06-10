# JavaScript Component Files

## Main
Holds logic for creating Game and View objects and starting game.

##### Functions:
- `play`

#### Web API's:
- `addEventListener` for "DOM Content Loaded".  Set up other event listener after content is loaded to screen.
- `addEventListener` for "click" on Canvas element.  Start game on click.

## Game
Holds logic for setting up and executing game.

##### Game Prototype:
- `initializeObjects`
- `step`
- `move`
- `checkBoundaryCollision`
- `checkObjectCollisions`

## View
Holds logic for how game information will be rendered to the screen.

#### View Prototype:
- `draw`

## Subject
Holds logic for how the subject will interact.

#### Subject Prototype:
- `move`
- `isCollidedWithBoundary`
- `isCollidedWithString`
- `isCollidedWithObstacle`

#### Web API's:
- `addEventListener` for "touchstart" on Button elements.  Begin moving paddle on touch.
- `addEventListener` for "touchend" on Button elements.  Finish moving paddle off touch.

## Obstacle
Holds logic for how the obstacles will interact.

#### Obstacle Property Functions
- `generateRandomObstacles`

#### Obstacle Prototype:
- `move`

## String
Holds logic for how the String connected to the Obstacle will interact.

#### String Prototype:
- `move`

## Utilities
Holds logic for any required utility functions.

#### Functions:
- `isCollidedWith`
- `isOutOfBounds`
