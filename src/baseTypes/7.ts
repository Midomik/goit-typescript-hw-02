/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const dayOfWeek: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const isWeekend = (day: string): boolean => {
  return day === "Saturday" || day === "Sunday" ? true : false;
};

isWeekend(dayOfWeek[0]);
isWeekend(dayOfWeek[6]);
