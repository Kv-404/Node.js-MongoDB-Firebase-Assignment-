// Question 3: Final Selection Review
// File: finalSelectionCheck.js

function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const finalAverage = (codingAverage + technicalAverage) / 2;

      if (finalAverage >= cutoff) {
        resolve(finalAverage);
      } else {
        reject("Sorry, you have not cleared the final selection cutoff.");
      }
    }, 2000);
  });
}

// Example usage
const codingAvg = 82.5;
const technicalAvg = 77.5;
const finalCutoff = 75;

finalSelectionCheck(codingAvg, technicalAvg, finalCutoff)
  .then((finalAverage) => {
    console.log(`Final Selection cleared! Final average score: ${finalAverage}`);
  })
  .catch((error) => {
    console.log(error);
  });