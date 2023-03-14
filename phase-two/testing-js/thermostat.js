class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerMode = true;
  }

  getTemperature() {
    return this.temp;
  }

  up() {
    this.temp = this.temp + 1;
    if (this.temp > 25 && this.powerMode === true) {
      this.temp = 25;
    } else if (this.temp > 32 && this.powerMode == false) {
      this.temp = 32;
    }
  }

  down() {
    this.temp = this.temp - 1;
    if (this.temp < 10) {
      this.temp = 10;
    }
  }
  
  setPowerSavingMode(boolean) {
    this.powerMode = boolean;
  }

  reset() {
    this.temp = 20;
  }
}

module.exports = Thermostat;