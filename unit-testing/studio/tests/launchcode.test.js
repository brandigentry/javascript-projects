// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("Should return nonprofit for value of organization", function(){
    expect(launchcode.organization).toBe("nonprofit");
});

test("Should return Jeff for value of executiveDirector", function(){
  expect(launchcode.executiveDirector).toBe("Jeff");
});

test("Should return 100 for the value of percentageCoolEmployees", function(){
  expect(launchcode.percentageCoolEmployees).toBe(100);
});

test("Should return 'Web Development', 'Data Analysis', and 'Liftoff'.", function(){
  expect(launchcode.programsOffered[0]).toBe('Web Development');
  expect(launchcode.programsOffered[1]).toBe('Data Analysis');
  expect(launchcode.programsOffered[2]).toBe('Liftoff');
  expect(launchcode.programsOffered.length).toBe(3);
});

test("When passed a number that is ONLY divisible by 2", function(){
  expect(launchcode.launchOutput(2)).toBe('Launch!');
});

test("When passed a number that is ONLY divisible by 3", function(){
  expect(launchcode.launchOutput(9)).toBe('Code!');
});

test("When passed a number that is ONLY divisible by 5", function(){
  expect(launchcode.launchOutput(25)).toBe('Rocks!');
});

test("When passed a number that is divisible by 2 AND 3", function(){
  expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
});

test("When passed a number that is divisible by 3 AND 5", function(){
  expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
});

test("When passed a number that is divisible by 2 AND 5", function(){
  expect(launchcode.launchOutput(10)).toBe('Launch Rocks!');
});

test("When passed a number that is divisible by 2, 3 AND 5", function(){
  expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
});

test("When passed a number that is NOT divisible by 2, 3 or 5", function(){
  expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.");
});
  // Write your unit tests here!
  
});