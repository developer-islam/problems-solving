/*
Problem: Even or Odd.
Difficulty: 8kyu.
Link: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe.

Description:
 - Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

Tags:
 - Fundamentals.
 - Mathematics.
*/

// 🛠️ Solution.
const evenOrOdd = number => (number % 2 === 0 ? "Even" : "Odd");

// ✅ Test Cases.
const chai = require("chai");
const assert = chai.assert;

describe("Sample tests", () => {
 it("2 is even", () => {
  assert.strictEqual(evenOrOdd(2), "Even");
 });
 it("7 is odd", () => {
  assert.strictEqual(evenOrOdd(7), "Odd");
 });
 it("-42 is even", () => {
  assert.strictEqual(evenOrOdd(-42), "Even");
 });
 it("-7 is odd", () => {
  assert.strictEqual(evenOrOdd(-7), "Odd");
 });
 it("0 is even", () => {
  assert.strictEqual(evenOrOdd(0), "Even");
 });
});

/*
Complexity:
- Time: 847ms.
*/
