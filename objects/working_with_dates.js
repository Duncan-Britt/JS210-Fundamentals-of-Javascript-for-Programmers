function dateSuffix(mDayNum) {
  mDayNum = String(mDayNum);
  switch (mDayNum) {
    case '1':
    case '21':
      return 'st'
      break;
    case '2':
    case '22':
      return 'nd'
      break;
    case '3':
    case '23':
      return 'rd'
      break
    default:
      return 'th'
  }
}

let today = new Date();
// console.log(today);

let weekDay = today.getDay().toString();
// console.log(`Today's day is ${weekDay}`);

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// console.log(`Today's day is ${daysOfWeek[weekDay]}`);

let mDay = today.getDate();
let month = today.getMonth();

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// console.log(`Today's date is ${daysOfWeek[weekDay]}, ${months[month]} ${mDay}${dateSuffix(mDay)}.`);

function foromattedMonth(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthIndex = date.getMonth();
  return months[monthIndex];
}

function foromattedDay(date) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const weekDayIndex = date.getDay().toString();
  const weekDay = daysOfWeek[weekDayIndex];
  const mDay = date.getDate().toString();
  return {
    wkday: weekDay,
    num: mDay + dateSuffix(mDay),
  }
}

function foromattedDate(date) {
  const day = foromattedDay(date);
  console.log(`Today's date is ${day.wkday}, ${foromattedMonth(date)} ${day.num}`);
}

foromattedDate(today);

// console.log(today.getFullYear(), today.getYear());

// console.log(today.getTime());

let tomorrow = new Date (today.getTime());
tomorrow.setDate(tomorrow.getDate() + 1);

foromattedDate(tomorrow);

let nextWeek = new Date(today.getTime());
console.log(nextWeek.toDateString() === today.toDateString());

nextWeek.setDate(nextWeek.getDate() + 7);
console.log(nextWeek.toDateString() === today.toDateString());

function formatTime(date) {
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  return hours + ':' + minutes;
}

console.log(formatTime(today));
