// Question 1: Coding Assessment
// File: codingScoreCheck.js

function codingScoreCheck(marks, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

      if (average >= cutoff) {
        resolve(average);
      } else {
        reject("Sorry, you have not cleared the Coding Assessment.");
      }
    }, 2000);
  });
}

// Example usage
const codingMarks = [80, 75, 90, 85];
const codingCutoff = 70;

codingScoreCheck(codingMarks, codingCutoff)
  .then((average) => {
    console.log(`Coding Assessment cleared! Average score: ${average}`);
  })
  .catch((error) => {
    console.log(error);
  });