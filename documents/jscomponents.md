# JavaScript Component Files

## Main
Holds logic for creating Game and View objects and starting game.

##### Functions:

#### Web API's:
- `addEventListener` for "DOM Content Loaded".  Create new Game and View objects.

## Game
Holds logic for setting up and executing game.

##### Game Prototype:
- `startGame`
- `initializeObjects`
- `step`
- `move`
- `checkBoundaryCollision`
- `checkObjectCollisions`
- `cutObstacle`
- `removeObject`
- `lose`
- `resetGame`

#### Web API's:
- `addEventListener` for "click" on Canvas element.  Start game on click.

## View
Holds logic for how game information will be rendered to the screen.

#### View Prototype:
- `draw`
- `renderLosingView`

## Subject
Holds logic for how the Subject will interact.

#### Subject Prototype:
- `move`
- `draw`
- `changeVelocity`
- `isCollidedWithBoundary`
- `isCollidedWithString`
- `isCollidedWithObstacle`

#### Web API's:
- `addEventListener` for "touchstart" on Button elements.  Begin moving Subject on touch.
- `addEventListener` for "touchend" on Button elements.  Finish moving Subject off touch.
- `addEventListener` for "keydown" on Canvas element.  Begin moving Subject on keydown.
- `addEventListener` for "keyup" on Canvas element.  Finish moving Subject on keyup.

## Obstacle
Holds logic for how the obstacles will interact.

#### Obstacle Property Functions
- `generateRandomObstacles`

#### Obstacle Prototype:
- `move`
- `draw`
- `fall`

## String
Holds logic for how the String connected to the Obstacle will interact.

#### String Prototype:
- `move`
- `draw`
- `cut`

## Utilities
Holds logic for any required utility functions.

#### Functions:
- `isCollidedWith`
- `isOutOfBounds`
