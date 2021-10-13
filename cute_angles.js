'use strict';

function dms(angleDegrees) {
  angleDegrees = angleDegrees % 360;
  if (angleDegrees < 0) angleDegrees = 360 + angleDegrees;
  
  const wholeDegrees = Math.floor(angleDegrees);
  const partialDegrees = angleDegrees - wholeDegrees;
  const minutes = partialDegrees * 60;
  const wholeMinutes = Math.floor(minutes);
  const partialMinutes = minutes - wholeMinutes;
  const wholeSeconds = Math.floor(partialMinutes * 60);

  const result = `${wholeDegrees.toString().padStart(1, '0')}°${wholeMinutes.toString().padStart(2, '0')}'${wholeSeconds.toString().padStart(2, '0')}"`;
  return result;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log();
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
