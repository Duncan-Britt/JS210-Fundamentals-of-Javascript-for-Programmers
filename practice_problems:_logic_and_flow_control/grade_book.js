function getGrade(...scores) {
  const sum = scores.reduce((acc, score) => {
    return acc + score;
  }, 0);
  const average = sum / scores.length;
  const grade = Math.floor(average / 10) * 10;

  switch(grade) {
    case 100:
    case 90:
      return 'A';
      break;
    case 80:
      return 'B';
      break;
    case 70:
      return 'C';
      break;
    case 60:
      return 'D';
      break;
    default:
      return 'F';
      break;
  }
}

console.log(getGrade(95, 90, 93)    === "A");
console.log(getGrade(50, 50, 95)    === "D");
