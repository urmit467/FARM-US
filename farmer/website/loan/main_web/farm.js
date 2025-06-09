var state = document.getElementById("state");
const submit = document.getElementById("Submit");

submit.addEventListener("click" , function () {
  let stdate = new Date(document.getElementById("Startdate").value);
  let enddate = new Date(document.getElementById("Enddate").value);
   if (isNaN(stdate) || isNaN(enddate)) {
    alert("Please enter valid dates.");
    return;
  }
  if (stdate > enddate) {
  alert("Start date must be before End date");
  return;
}
 let monthsBetween =
    (enddate.getFullYear() - stdate.getFullYear()) * 12 +
    (enddate.getMonth() - stdate.getMonth()) + 1; // +1 to include start month

  

})