import { getObstacleEvents } from './computer-vision';

interface Events {
  [obstacle:string]: boolean
}

interface AutonomousCar {
  isRunning?: boolean
  respond: (events: Events) => void
}

interface AutonomousCarProps {
  isRunning?: boolean
}

interface Control {
  execute: (command: string) => void
}

interface Steering extends Control {
  turn: (direction: string) => void
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

}

let autonomousCar = new Car({isRunning: true});


autonomousCar.respond(getObstacleEvents());
