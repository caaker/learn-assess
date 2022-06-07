function timeConversion(s) {

  // retrieve all but last 2 characters ( 07:05:45 )
  let no_meridian = s.slice(0, -2);

  // retrieve the last 2 characters, the meridian ( AM/PM )
  let meridian = s.slice(-2);

  // retrieve first 2 characters, the hour ( 07 )
  let hour = s.slice(0, 2);

  // retrieve minutes:seconds ( :05:45)
  let no_hour = no_meridian.slice(2);

  // convert from string to int
  let hour_int = parseInt(hour);

  // 12 AM or midnight is equivalent to 00:00:00
  if(meridian === 'AM') {
    if(hour_int === 12) {
      return '00' + no_hour;
    }
    return no_meridian;

  // 12 PM or noon is equivalent to 12:00:00
  } else if (meridian === 'PM') {
    if(hour_int === 12) {
      return no_meridian;
    }
    return (hour_int + 12) + no_hour;
  }
}

console.log(timeConversion('07:05:45PM')); // 19:05:45
console.log(timeConversion('12:00:00AM')); // 00:00:00
console.log(timeConversion('12:00:00PM')); // 12:00:00
/*

Question
--------------------
Given a time in hour AM/PM format, convert it to military (24-hour) time.

Time Complexity
--------------------

Notes
--------------------

*/
