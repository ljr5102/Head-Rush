# Game - Slader

[Play game here][live]

[live]: http://

## Minimum Viable Product

This project is a browser based game where your objective is to collect as many points as possible
by avoiding the obstacles or cutting the string by which the obstacles are hanging.
The game incorporates visuals that represent Slader, a web application that
provides millions of solutions to the most popular textbooks in the United States.    
This game is built using JavaScript with HTML5 Canvas and implements complete test coverage with Jasmine.

The game includes the following features:


- [ ] Subject and Obstacles for the basis of gameplay
- [ ] Realistic collision logic
- [ ] Scoring system that will persist high scores locally
- [ ] Images that best represent Slader
- [ ] Platform that integrates on both mobile and web devices
- [ ] Full test suite

## Design Docs
* [View Wireframes][views]
* [JavaScript Files][components]

[views]: ./documents/views.md
[components]: ./documents/jscomponents.md

## Implementation Timeline

### Phase 1: Setup (1 day)

**Objective:** Event listeners added and basic elements rendered to canvas.

- [x] Create index HTML file
- [x] Create Main file
- [x] Create Game file
- [x] Create View file
- [x] Create corresponding spec testing files
- [x] Add event listeners for clicking on canvas
- [x] Implement basic draw logic
- [x] Add any necessary unit testing specs

### Phase 2: Canvas and Subject (1.5 days)

**Objective:** Subject rendered and can move around the canvas.

- [x] Create Subject file
- [x] Create corresponding spec testing file
- [x] Add event listeners for keydown and touch to move Subject
- [x] Add any necessary unit testing specs

### Phase 3: Obstacles (0.5 days)

**Objective:** Obstacles randomly rendered to the canvas.

- [x] Create Obstacle file
- [x] Create corresponding spec testing file
- [ ] Implement collision logic for Obstacle and Subject
- [ ] Add any necessary unit testing specs

### Phase 4: Obstacle Generation (1 day)

**Objective:** Obstacles are generated in a way that makes the game progressively more difficult.

- [ ] Build algorithm for determining rate and frequency of obstacles
- [ ] Add any necessary unit testing specs

### Phase 5: Strings on Obstacles (0.5 days)

**Objective:** Obstacles are connected to strings that can be cut by Subject.

- [ ] Create String file
- [ ] Build logic for creating strings attached to obstacles
- [ ] Build logic for collision of Subject with String
- [ ] Add any necessary unit testing specs

### Phase 6: Testing and Review of core logic (5 days)

**Objective:** Game play works as expected.  Slader team approves game basics.

- [ ] Test gameplay end-to-end
- [ ] User acceptance testing by Slader team
- [ ] Resolve any issues that result from testing

### Phase 7: Imagery (5 days)

**Objective:** Game is given professional, clean look with Slader designs and images.

- [ ] Backdrop is added
- [ ] Subject and Obstacles are replaced with Slader designs
- [ ] Background image is given parallax effect
- [ ] Adjust game logic for handling images

### Phase 8: Final testing and review (5 days)

**Objective:** Game play works as expected.  Slader team approves final product.

- [ ] Test gameplay end to end
- [ ] User acceptance testing by Slader team
- [ ] Resolve any issues that result from testing
- [ ] Hand off finished product to Slader team

### Bonus Features (TBD)
