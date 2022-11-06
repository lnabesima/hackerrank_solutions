/* Time Conversion */

/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time. 

**Example:**
s = '12:01:00PM'
  Return '12:01:00'

s = '12:01:00AM'
  Return '00:01:00'
*/

const s = '12:01:00am';

function timeConversion(s) {
  const modifier = s.substring(s.length - 2).toLowerCase();
  let [hour, minute, second] = s.slice(0, 8).split(':');

  if (hour === '12') hour = '00';
  if (modifier === 'pm') hour = Number(hour) + 12;

  return `${hour}:${minute}:${second}`;
}

console.log(timeConversion(s));
