'use strict';

class validator {

  constructor(input) {
    this.input = input;

  }



  // it test if it boolen if it string or array or number and return tue just if it object 
  isObject(input) {
    if (typeof input !== 'string' || typeof input !== 'number' || typeof input !== 'boolean' || typeof input !== 'function' || typeof input !== Array.isArray())
      return typeof input === 'object';
  }
  
  keysAreExists(input) {
    if (Object.keys(input)) {
      return true;
    }
  }
  valueAreExists(input) {
    if (Object.values(input)) {
      return true;
    }
  }
  matchTheTypeRequried(input) {
    Object.values(input).every(value => {
      typeof value === 'string' || typeof value === 'number' || typeof value === 'object';
    });
    return true;
  }
  arrayIsValueOfOneProparties(input) {
    Object.values(input).filter(value => {
      if (value === Array.isArray()) {
        return true;
      }
    }
    );
  }

  arrayValueIsStringAndNotEmpty(input) {
    Object.values(input).every(val => {
      if (typeof val === Array.isArray()) {
        if (val.length > 0 && val !== null) {
          return true;
        } else {
          return false;
        }
      }
    });
  }
}
// let data = require('../data/data.json');
// console.log(personInfo)

class Person extends validator {
  constructor(input) {
    // console.log('info', info);
    super(input);
  }
  run() {
    super.isObject();
    super.keysAreExists();
    super.valueAreExists();
    super.arrayIsValueOfOneProparties();
    super.matchTheTypeRequried();
    super.arrayValueIsStringAndNotEmpty();

  }

}
module.exports = { Person, validator };
// let validator = module.exports = {};
