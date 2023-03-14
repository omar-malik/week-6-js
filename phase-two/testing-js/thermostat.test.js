const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  it('returns temp of 20', () => {
    const thermostat = new Thermostat;

    expect(thermostat.getTemperature()).toBe(20);
  })

  it('returns temp of 22', () => {
    const thermostat = new Thermostat;

    thermostat.up()
    thermostat.up()

    expect(thermostat.getTemperature()).toBe(22);
  });


  it('returns 21', () => {
    const thermostat = new Thermostat;

    thermostat.up();
    thermostat.up();

    thermostat.down();

    expect(thermostat.getTemperature()).toBe(21);
    thermostat.setPowerSavingMode(true);

    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    
    expect(thermostat.getTemperature()).toBe(25);
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(26);

    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);

  });

})