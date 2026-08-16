// Question 2: Technical Interview
// File: technicalInterviewCheck.js

function technicalInterviewCheck(marks, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

      if (average >= cutoff) {
        resolve(average);
      } else {
        reject("Sorry, you have not cleared the Technical Interview.");
      }
    }, 2000);
  });
}

// Example usage
const technicalMarks = [70, 80, 75, 85];
const technicalCutoff = 70;

technicalInterviewCheck(technicalMarks, technicalCutoff)
  .then((average) => {
    console.log(`Technical Interview cleared! Average score: ${average}`);
  })
  .catch((error) => {
    console.log(error);
  });