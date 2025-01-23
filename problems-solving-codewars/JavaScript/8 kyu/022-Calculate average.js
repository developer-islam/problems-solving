/*
 Task:
		- Write a function which calculates the average of the numbers in a given array.
		- Note: Empty arrays should return 0.

 Tags:
		- Fundamentals, Arrays.
*/

function findAverage(array) {
 return array.length
  ? array.reduce((sum, num) => sum + num, 0) / array.length
  : 0;
}
