const { Settings, Messages } = require('./constants/Config');
const Console = require('./utils/Console');

const Validator = {
  isValidCarNames(name) {
    try {
      Validator.carNameLength(name);
      return false;
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  carNameLength(carNames) {
    carNames.forEach((carName) => {
      if (
        carName.length < Settings.MIN_NAME_LENGTH ||
        carName.length > Settings.MAX_NAME_LENGTH
      ) {
        throw new Error(Messages.ERROR_CAR_NAME);
      }
    });
  },

  isValidAttempts(attempts) {
    try {
      Validator.notNumber(attempts);
      Validator.bigNumber(Number(attempts));
      Validator.notInteger(Number(attempts));
      return false;
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  notNumber(attempts) {
    if (!/^\d+$/g.test(attempts)) {
      throw new Error(Messages.ERROR_ATTRMPTS);
    }
  },

  bigNumber(attempts) {
    if (attempts > Settings.MAX_ATTEMPTS || attempts < Settings.MIN_ATTEMPTS) {
      throw new Error(Messages.ERROR_ATTRMPTS);
    }
  },
  notInteger(attempts) {
    if (attempts % 1 !== 0) {
      throw new Error(Messages.ERROR_ATTRMPTS);
    }
  },
};

module.exports = Validator;
