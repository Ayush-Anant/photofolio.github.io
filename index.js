function leap(year) {
  prompt("year");
  if (year % 4 === 0) {
    alert("leap year");
  }
  if (year % 100 === 0) {
    alert("leap year");
  }
  if (year % 400 === 0) {
    alert("leap year");
  } else {
    alert("not a leap year");

  }
  console.log(year);
}
leap(2020);
