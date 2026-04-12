const maRide = {
    tyres: ["fr", "fl"],
    enging: {number: "546465465", celender: 6},
  model: "2004",
  name: "Civic",
  hs: 900,
  plateNumber: "M K 1",
  isEngineRunning: false,
  duService: false,
  odometer: 500,
  takeRide(km) {
    if (this.isEngineRunning) {
      this.odometer += km;
      console.log(
        `Total distance travled increased by ${km} to be: ${this.odometer} KM`,
      );
    } else {
      console.log("Go learn how to run a car first :p");
    }
  },
  startEngine() {
    if (this.isEngineRunning == true || this.duService == true) {
      console.log("Are you kidding me boy!?");
    } else {
      this.isEngineRunning = true;
      console.log(
        `Engine started! Engin running state is: ${this.isEngineRunning}`,
      );
    }
  },
  killEngine() {
    if (this.isEngineRunning != true) {
      console.log("Are you kidding me boy!?");
    } else {
      this.isEngineRunning = false;
      console.log(
        `Engine stopped! Engine running state is: ${this.isEngineRunning}`,
      );
    }
  },
};

maRide.startEngine();
console.log(maRide.odometer);
maRide.takeRide(23);
console.log(maRide.odometer);
console.log(maRide);


// const model = maRide.model
// const name = maRide.name

let arr = [1, 2, 3, "home"]

const [first, , second] = arr;

console.log(first, second );


const {model, name} = maRide
console.log(name, model);

console.log(maRide["model"]);
// console.log(maRide[0][1]);
console.log(maRide.enging.number);

console.log(maRide.tyres[1]);
console.log(maRide.model);




