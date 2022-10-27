let price_Change = document.getElementById("slider");
let moneyForPayment = document.querySelector(".number");
let ChangeToYearly = document.querySelector(".round");
let pageViews = document.querySelector(".pagviewstext");
let monthText = document.getElementById("montlytext");

document.getElementById("slider").addEventListener("click", function () {
  volume = +this.value; //+ << made string as a number

  if (volume === 33) {
    document.querySelector(".pagviewstext").innerHTML = "10K PAGEVIEWS";
    document.querySelector(".number").innerHTML = "$16.00";

    console.log(volume);
  } else if (volume === 66) {
    document.querySelector(".pagviewstext").innerHTML = "100K PAGEVIEWS";
    document.querySelector(".number").innerHTML = "$32.00";
    document.getElementById("montlytext").innerHTML = "/ Month";
    console.log(volume);
  } else if (volume === 99) {
    document.querySelector(".pagviewstext").innerHTML = "1M PAGEVIEWS";
    document.querySelector(".number").innerHTML = "$64.00";
    document.getElementById("montlytext").innerHTML = "/ Month";
    console.log(volume);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let checkbox = document.querySelector('input[type="checkbox"]');
  let slider = document.getElementById("slider");
  volume = this.value;
  let falsechek = checkbox.checked === checkbox.checked;
  document.getElementById("montlytext").innerHTML = "/ Month";
  document.querySelector(".number").innerHTML = "$16.00";

  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      document.getElementById("montlytext").innerHTML = "/ Yearly";
      document.querySelector(".number").innerHTML = "$144";
      console.log("checked");
    } else if (falsechek) {
      document.getElementById("montlytext").innerHTML = "/ Month";
      document.querySelector(".number").innerHTML = "$16.00";
    }
    ("");
    console.log("checked");
    if (checkbox.checked && volume === 33) {
      document.getElementById("montlytext").innerHTML = "/ Yearly";
      document.querySelector(".number").innerHTML = "$144";
      console.log("checked");
    } else if (falsechek && volume === 33) {
      document.getElementById("montlytext").innerHTML = "/ Month";
      document.querySelector(".number").innerHTML = "$16.00";
      console.log("checked");
    } else if (checkbox.checked && volume === 66) {
      document.getElementById("montlytext").innerHTML = "/ Yearly";
      document.querySelector(".number").innerHTML = "$288";
      console.log("checked");
    } else if (falsechek && volume === 66) {
      document.getElementById("montlytext").innerHTML = "/ Month";
      document.querySelector(".number").innerHTML = "$32.00";
      console.log("checked");
    } else if (checkbox.checked && volume === 99) {
      document.getElementById("montlytext").innerHTML = "/ Yearly";
      document.querySelector(".number").innerHTML = "$576";
      console.log("checked");
    } else if (falsechek && volume === 99) {
      document.getElementById("montlytext").innerHTML = "/ Month";
      document.querySelector(".number").innerHTML = "$64.00";
      console.log("checked");
    }
  });
});
