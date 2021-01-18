import { getObstacleEvents } from './computer-vision';

interface Events {
  [obstacle:string]: boolean
}

interface Steering extends Control {
  turn: (direction: string) => void
}

interface Control {
  execute: (command: string) => void
}

interface AutonomousCar {
  isRunning?: boolean
  respond: (events: Events) => void
}

interface AutonomousCarProps {
  isRunning?: boolean
  steeringControl: Steering
}

class Car implements AutonomousCar {
  isRunning;
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
  }

  respond(event: Events) {
    if (!this.isRunning) {
      return console.log("Car is turned off");
    }


  }
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: ${command}`);
  }

  turn(direction: string) {
    this.execute(`turn ${direction}`);
  }
}

let steering = new SteeringControl();
console.log(steering.turn("right"));
let autonomousCar = new Car({isRunning: true});


autonomousCar.respond(getObstacleEvents());
