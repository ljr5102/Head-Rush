# JavaScript Component Files

## Main
Holds logic for creating Game and View objects and starting game.

##### Functions:

#### Web API's:
- `addEventListener` for "DOM Content Loaded".  Create new Game and View objects.

## Game
Holds logic for setting up and executing game.

##### Game Properties:
- `cycleDeltaForLevel` for number of cycles between pushing new obstacles into field of view.

##### Game Prototype:
- `startGame`
- `resetGame`
- `initializePlatform`
- `initializeObjects`
- `handleObstacles`
- `obstaclesOffView`
- `checkObjectCollisions`
- `checkBoundaries`
- `step`
- `gameOverStep`
- `move`
- `cleanUp`

#### Web API's:
- `addEventListener` for "click" on Canvas element.  Start game on click.
- `addEventListener` for "click" on Play Again button.  Restart game on click.
- `requestAnimationFrame` for continuous playing of game.
- `requestAnimationFrame` for looping of game over screen.

## View
Holds logic for how game information will be rendered to the screen.

#### View Prototype:
- `drawInitialPlatform`
- `renderIntroScreen`
- `unrenderIntroScreen`
- `renderLevelTransition`
- `unrenderLevelTransition`
- `renderScoreAndLevel`
- `renderGameOver`
- `clearGameOver`
- `levelUp`
- `resetLevel`
- `displayScore`
- `draw`

## Subject
Holds logic for how the Subject will interact.

#### Subject Prototype:
- `move`
- `draw`
- `addVelocity`
- `stopMotion`
- `addTouchVelocity`
- `removeTouchVelocity`
- `explode`
- `handleOutOfBounds`
- `isCollidedWithString`
- `isCollidedWithObstacle`

#### Web API's:
- `addEventListener` for "touchstart" on Canvas element.  Begin moving Subject on touch.
- `addEventListener` for "touchend" on Canvas element.  Finish moving Subject off touch.
- `addEventListener` for "keydown" on Canvas element.  Begin moving Subject on keydown.
- `addEventListener` for "keyup" on Canvas element.  Finish moving Subject on keyup.

## Obstacle
Holds logic for how the obstacles will interact.

#### Obstacle Properties
- `images`
- `levelVelocities`
- `obstaclesPerLevel`

#### Obstacle Property Functions
- `generateRandomObstacles`
- `createEgg`
- `createGlasses`
- `createHouse`
- `createIceCream`
- `createLog`
- `createPencil`
- `createShip`
- `createShoe`
- `createTooth`
- `createWorm`

#### Obstacle Prototype:
- `cutFromString`
- `move`
- `draw`
- `drawRect`
- `drawCirc`
- `fall`
- `isCollidedWithPlatform`

## String
Holds logic for how the String connected to the Obstacle will interact.

#### String Prototype:
- `move`
- `cutMove`
- `draw`
- `cutDraw`

## MockString
Holds logic for how the MockString disconnected from the Obstacle will interact.

#### MockString Prototype:
- `move`
- `draw`

## Platform
Holds logic for how the game platform will interact with other objects.

#### Platform Properties:
- `groundImage`

#### Platform Prototype:
- `introDraw`
- `move`
- `draw`

## Score
Holds logic for the scoring system.

#### Score Prototype:
- `evasionPoints`
- `destroyPoints`
