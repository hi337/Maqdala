document.getElementById("button").addEventListener("click", process);

document.getElementById("corr1").style.display = "none";
document.getElementById("corr2").style.display = "none";
document.getElementById("corr3").style.display = "none";
document.getElementById("corr4").style.display = "none";

function process() {
  //INPUT
  let in1 = document.getElementById("in1").value.toLowerCase();
  let in2 = document.getElementById("in2").value.toLowerCase();
  let in3 = document.getElementById("in3").value.toLowerCase();
  let in4 = document.getElementById("in4").value.toLowerCase();
  let true_arr = [false, false, false, false];
  let correct = 0;
  let advice_arr = [
    "Read Better. Don't you speak English?",
    "My Goodness. Go back to Kindergarden",
    "Ok, not bad",
    "Good job, but why not 100%?",
    "Good Boy. You get a star!",
  ];
  //PROCESS
  if (in1 == "ethiopia" || in1 == "abyssinia") {
    correct += 1;
    true_arr[0] = true;
  }
  if (in2 == "britain") {
    correct += 1;
    true_arr[1] = true;
  }
  if (
    in3 == "tweodros" ||
    in3 == "emperor tweodros" ||
    in3 == "emperor tweodros ii"
  ) {
    correct += 1;
    true_arr[2] = true;
  }
  if (in4 == 1868) {
    correct += 1;
    true_arr[3] = true;
  }
  //OUTPUT
  document.getElementById("output").innerHTML = `Your Grade: ${
    (correct / 4) * 100
  }%`;
  document.getElementById("advice").innerHTML = advice_arr[correct];
  for (let x = 0; x <= 3; x++) {
    if (true_arr[0] == false) {
      document.getElementById("corr1").style.display = "block";
    } else {
      document.getElementById("corr1").style.display = "none";
    }
    if (true_arr[1] == false) {
      document.getElementById("corr2").style.display = "block";
    } else {
      document.getElementById("corr2").style.display = "none";
    }
    if (true_arr[2] == false) {
      document.getElementById("corr3").style.display = "block";
    } else {
      document.getElementById("corr3").style.display = "none";
    }
    if (true_arr[3] == false) {
      document.getElementById("corr4").style.display = "block";
    } else {
      document.getElementById("corr4").style.display = "none";
    }
  }
}
