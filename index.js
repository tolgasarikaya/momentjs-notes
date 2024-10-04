const moment = require("moment");

// Current Date + Time
let m = moment();

// Create from ISO 8601 string
m = moment("2022-02-25 09:00");

// Using a format
m = moment("14/06/2019 4:50PM", "DD/MM/YYYY h:mmA");

// Create using milliseconds since epoch (1st Jan 1970) ! GMT changed donno why
m = moment(600000);

// Create using seconds since epoch (1st Jan 1970) ! GMT changed donno why
m = moment.unix(7200);

// Create a moment object in UTC mode
m = moment.utc("2022-02-25 09:00");

m = moment();
// console.log(m.toString());

// Getting units
// console.log(m.minutes());
// console.log(m.hour()); // or m.hours() same
// console.log(m.week());
// console.log(m.get("quarter"));
// console.log(m.quarter());

// Setting units
m.minutes(65); // it will set to 5
m.hour(14);
m.week(4);
m.set("day", 4); // 0 is Sunday 6 is Saturday
// console.log(m.toString());

// Min/Max
const differentMoment = moment("2019-05-25");
// console.log(moment.max(m, differentMoment).toString());
// console.log(moment.min(moment(), differentMoment).toString());

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add, Substract and Manipulate Time
m = moment();
// console.log(`Original Moment: ${m.toString()}`);
m.add(1.5, "hours").add(20, "minutes"); // instead of hours you can use h as a shortcut

m.add({
  hours: 7,
  minutes: 15,
});

m.subtract({
  hours: 2,
  minutes: 15,
});

m.startOf("hour"); // returns to the start of the hour
m.startOf("year"); // returns to the start of the year
m.endOf("day"); // returns to the end of the day 23:59:59

m.utc(); // GMT+0000
// console.log(m.utcOffset()); // GMT+0000 => 0*60 = 0
m.local(); // GMT+0300
// console.log(m.utcOffset()); // GMT+0300 => 3*60 = 180
m.utcOffset(5); // returns to GMT+0500 or you can write 300 which is in minutes it behaves that as minutes result will be the same or you can pass string "+03:00"

// console.log(`After Manipulation: ${m.toString()}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Display/Format Dates

// m = moment();
// console.log(m.format("dddd MMM Mo YYYY")); // dddd=>Friday MMM=>Oct Mo=>10th YYYY=>2024
// console.log(m.format("[Yeah the day is] dddd [and we're in] YYYY"));

// m.locale("tr-TR");
// console.log(m.format("L")); // by default it prints as month/day/year set locale to format

// const m2 = moment("2019-01-13");
// console.log(m2.fromNow()); // 5 years ago human readable text
// console.log(m2.from("2019-02-10")); // a month ago or in 3 months

// const eventMoment = moment().add(2, "hours");
// console.log(eventMoment.calendar()); //Today at 11.03 AM

// m = moment();
// const m2 = moment("2019-01-13");
// console.log(m2.diff(m)); // result = m2 - m in milliseconds
// console.log(m2.diff(m, "days")); // result = m2 - m in days but converts it to int number also years, weeks
// console.log(m2.diff(m, "days", true)); // result = m2 - m in days as floating number also years, weeks

// console.log(m.daysInMonth()); // prints how many days does a certain month contains

// m2.toJSON = function () {
//   return "dom";
// }; // => {"momentObj":"dom"}
// const jsonObj = {
//   momentObj: m2,
// };
// console.log(JSON.stringify(jsonObj)); // => {"momentObj":"2019-01-12T21:00:00.000Z"}

// console.log(`toString() => ${m.toString()}`);
// console.log(`toISOString() => ${m.toISOString()}`);

///////////////////////////////////////////////////////////////////////
// Querying Dates and Times

// console.log(
//   moment("2019-06-04 15:35:32.764").isSame("2019-06-04 15:35:32.764")
// ); // => returns a boolean
// console.log(
//   moment("2019-06-04 15:35:32").isSame("2019-06-04 15:35:32", "hour")
// ); // => checks hours are the same and returns a boolean
// console.log(moment("2019-06-04 15:35:32").isBefore("2019-06-04 15:36:00")); // => returns a boolean
// console.log(
//   moment("2019-06-04 15:35:32").isBefore("2019-06-04 15:36:00", "year")
// ); // => returns a false bc 2019 is not before 2019
// console.log(moment("2019-06-04 15:35:32").isAfter("2019-06-04 15:36:00"));

// const m1 = moment("2019-06-06");
// const m2 = moment("2019-06-05");
// const m3 = moment("2019-06-07");
// console.log(m1.isBetween(m2, m3));

// console.log(moment("2019-10-06 02:00:00").locale("en-au").isDST()); // is daylight saving time

// const m1 = moment("2019-06-06");
// console.log(moment.isMoment(m1)); // check if m1 is moment object, true
// console.log(moment.isMoment({ name: "dom" })); // false
// console.log(moment.isMoment(new Date())); // false

// console.log(moment.isDate(new Date())); // check if containing is date object, true
// console.log(moment.isDate(m1)); // false
// console.log(moment.isDate({ name: "dom" })); //false

///////////////////////////////////////////////////////////////////////////////////////////////////
// Durations and Lengths of Time
// let dur;
// dur = moment.duration(5000);
// dur = moment.duration(5, "seconds");
// dur = moment.duration(1, "day");
// console.log(dur.humanize()); // conveets to human readable text

// console.log(moment.duration(5, "weeks").days()); // how many days 0-30, 4
// console.log(moment.duration(5, "weeks").get("days")); // same with above, 4
// console.log(moment.duration(5, "weeks").asDays()); // no range limitation converts to days, 35
// console.log(moment.duration(5, "weeks").as("seconds")); // no range limitation converts to seconds

// console.log(moment.duration(1, "day").add(1, "week").humanize());
// console.log(moment.duration(1, "day").subtract(1, "week").humanize());

// const m1 = moment().add(2, "days");
// const m2 = moment().add(1, "week");
// console.log(moment.duration(m2.diff(m1)).asDays());
