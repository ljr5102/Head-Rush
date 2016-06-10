# Game - Slader

[Play game here][live]

[live]: http://www.louisrobinson.io

## Minimum Viable Product

This project is a browser based game based where your objective is to collect as many points as possible
by avoiding the obstacles or cutting the string by which they are hanging.
The game incorporates visuals that represent Slader, a web application that
provides millions of solutions to the most popular textbooks in the United States.    
This game is built using JavaScript with HTML5 Canvas and implements complete test coverage with Jasmine.

The game includes the following features:


- [] Subject and Obstacles for the basis of gameplay
- [] Realistic collision logic
- [] Scoring system that will persist high scores locally
- [] Images that best represent Slader
- [] Platform that integrates on both mobile and web devices
- [] Full test suite

## Design Docs
* [View Wireframes][views]
* [JavaScript Files][components]

[views]: ./views.md
[components]: ./components.md

## Implementation Timeline

### [Phase 1][phase-one]: Setup

**Objective:** Event listeners added and some basic elements rendered to canvas

- [] Create Main file
- [] Create Game file
- [] Create View file
- [] Create corresponding spec testing files
- [] Add event listeners for clicking on canvas
- [] Implement basic draw logic
- [] Add any necessary unit testing specs

### [Phase 2][phase-two]: Canvas and Brain

**Objective:** Brain rendered and can move around the canvas

- [] Create Brain file
- [] Create corresponding spec testing file
- [] Add event listeners for keydown and touch to move Brain
- [] Add any necessary unit testing specs

### [Phase 3][phase-three]: Obstacles

**Objective:** Obstacles randomly rendered to the canvas
- [] Create Obstacle file
- [] Create corresponding spec testing file
- [] Implement collision logic for Obstacle and Brain
- [] Add any necessary unit testing specs

### [Phase 4][phase-four]: Obstacle Generation

**Objective:** Obstacles are generated in a way that makes the game progressively more difficult

- [] Build algorithm for determining rate and frequency of obstacles
- [] Build logic for where bricks will be placed upon generating
- [] Add any necessary unit testing specs

### [Phase 5][phase-five]: Strings on Obstacles

**Objective:** Obstacles are connected to strings that can be cut by Brain.

- [] Create String file
- [] Build logic for creating strings attached to obstacles
- [] Build logic for collision of Brain with String
- [] Add any necessary unit testing specs

### [Phase 6][phase-five]: Testing and Review of core logic

**Objective:** Game play works as expected.  Slader team approves game basics.

- [] Test gameplay end-to-end
- [] User acceptance testing by Slader team
- [] Resolve any issues that result from testing

### [Phase 7][phase-six]: Imagery

**Objective:** Game is given professional, clean look with Slader designs and images.

- [] Backdrop is added
- [] Brain and Obstacles are replaced with Slader designs
- [] Background image is given parallax effect
- [] Adjust game logic for handling images

### [Phase 8][phase-seven]: Final testing and review

**Objective:** Game play works as expected.  Slader team approves final product.

- [] Test gameplay end to end
- [] User acceptance testing by Slader team
- [] Resolve any issues that result from testing
- [] Hand off finished product to Slader team

### Bonus Features (TBD)