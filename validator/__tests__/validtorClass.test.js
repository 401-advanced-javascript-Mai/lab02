'use strict';

const personInfo = require('../lib/validtorRefactoring.js');

// const data = require('../data/data.json');

let person = new personInfo.Person();

describe('person module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive () ... DRY it out
  //  i make the function that can test all 


  // if the input is string return false
  it('strings', () => {
    let str = 'yes';
    expect(person.isObject(str)).toBeFalsy();  
  });
  
  // if the input is number return false
  it('numbers', () => {
    let num = 1;
    expect(person.isObject(num)).toBeFalsy();
  });
  
  // if the input is array return false
  it('arrays', () => {
    let arr = ['a'];
    expect(person.isObject(arr)).toBeTruthy();
  });

  // if the input is object return true
  it('objects', () => {
    let obj = {x:'y'};
    expect(person.isObject(obj)).toBeTruthy();
  });
   
  // if the input is boolens return false  
  it('booleans', () => {
    let bool = false;
    expect(person.isObject(bool)).toBeFalsy();
  });

  // if the input is object return false
  it('functions', () => {
    let func = () => {};
    expect(person.isObject(func)).toBeFalsy();
  });

});



describe('person module performs complex validations', () => {

  it('validates if the input is object or not ', () => {
    const mai = {
      id:'28-1 lovely girl ',
      name:'mai yusuf',
      age: 25,
      children:[],
    }; 
    // let str = 'mai';
    expect(person.isObject(mai)).toBeTruthy();
  });
    


  it('validates the presence of required object properties at any level', () => {
    const mai = {
      id:'28-1 lovely girl ',
      name:'mai yusuf',
      age: 25,
      children:[],
    }; 
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    /// checck if there ptoparrties which mean have keys and value for each one 
    expect(person.keysAreExists(mai)).toBeTruthy();
    expect(person.valueAreExists(mai)).toBeTruthy();
  });

  it('validates the proper types of object properties', () => {
    const mai = {
      id:'28-1 lovely girl ',
      name:'mai yusuf',
      age: 25,
      children:[],
    }; 
    // let person = new person.PersonInfo(mai);

    // i.e. person.name must be a string, etc.
    expect(person.matchTheTypeRequried(mai)).toBeTruthy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    const mai = {
      id:'28-1 lovely girl ',
      name:'mai yusuf',
      age: 25,
      children:[],
    }; 
    expect(person.arrayIsValueOfOneProparties(mai)).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    const mai = {
      id:'28-1 lovely girl ',
      name:'mai yusuf',
      age: 25,
      children:[],
    }; 
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(person.arrayValueIsStringAndNotEmpty(mai)).toBeFalsy();
  });


});