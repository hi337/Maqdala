document.getElementById("button").addEventListener("click", process);

function process() {
  //INPUT
  let in1 = document.getElementById("in1").value.toLowerCase();
  let in2 = document.getElementById("in2").value.toLowerCase();
  let in3 = document.getElementById("in3").value.toLowerCase();
  let in4 = document.getElementById("in4").value.toLowerCase();
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
  }
  if (in2 == "britain") {
    correct += 1;
  }
  if (
    in3 == "tweodros" ||
    in3 == "emperor tweodros" ||
    in3 == "emperor tweodros ii"
  ) {
    correct += 1;
  }
  if (in4 == 1868) {
    correct += 1;
  }
  //OUTPUT
  document.getElementById("output").innerHTML = `Your Grade: ${
    (correct / 4) * 100
  }%`;
  document.getElementById("advice").innerHTML = advice_arr[correct];
}
