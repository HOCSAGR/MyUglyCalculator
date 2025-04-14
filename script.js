let i = 9;

let display = document.createElement("textarea");

let mathDisplay = document.createElement("textarea");

while (i >= 0) {
  let button = document.createElement("button");
  button.innerHTML = i;
  document.getElementById("keypad").prepend(button);
  button.onclick = (function (i) {
    return function () {
      display.innerHTML += i;
    };
  })(i);
  i--;
}

let backspace = document.createElement("button");
backspace.innerHTML = "<=";
backspace.onclick = () => {
  let editedDisplay = display.value;
  text = editedDisplay.slice(0, -1);
  display.innerHTML = text;
};
document.getElementById("keypad").appendChild(backspace);

let add = document.createElement("button");
add.innerHTML = "+";
add.onclick = () => {
  let number = display.value;
  display.innerHTML = "";
  mathDisplay.innerHTML += number + "+";
};

let sub = document.createElement("button");
sub.innerHTML = "-";
sub.onclick = () => {
  let number = display.value;
  display.innerHTML = "";
  mathDisplay.innerHTML += number + "-";
};

let mult = document.createElement("button");
mult.innerHTML = "x";
mult.onclick = () => {
  let number = display.value;
  display.innerHTML = "";
  mathDisplay.innerHTML += number + "x";
};

let res = document.createElement("button");
res.innerHTML = "=";
res.onclick = () => {
  let number = display.value;
  display.innerHTML = "";
  mathDisplay.innerHTML += number; // + "\nResult is: ";
  splitArray();
};

document.getElementById("keypad").appendChild(add);
document.getElementById("keypad").appendChild(sub);
document.getElementById("keypad").appendChild(mult);
document.getElementById("keypad").appendChild(res);
document.getElementById("keypad").appendChild(display);
document.getElementById("keypad").appendChild(mathDisplay);

let res2 = document.createElement("textarea");
res2.innerHTML = "Here will be result.";
document.getElementById("keypad").appendChild(res2);

splitArray = function () {
  mathHtml = mathDisplay.innerHTML;
  signs = mathHtml
    .split(/['0','1','2','3','4','5','6','7','8','9']/)
    .filter((r) => r);
  nums = mathHtml.split(/[x+-]/);
  console.log(signs);
  console.log(nums);
  let temp = 0;
  let temp1 = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (signs[i] == "+") {
      if (i == 0) {
        temp1 = temp;
      } else {
        temp1 = temp - parseInt(nums[i]);
      }
      temp = parseInt(nums[i]) + parseInt(nums[i + 1]) + temp1;
    } else if (signs[i] == "-") {
      if (i == 0) {
        temp1 = temp;
      } else {
        temp1 = temp - parseInt(nums[i]);
      }
      temp = parseInt(nums[i]) - parseInt(nums[i + 1]) + temp1;
    } else if (signs[i] == "x") {
      if (i == 0) {
        temp1 = temp;
      } else {
        temp1 = temp - parseInt(nums[i]);
      }
      temp = parseInt(nums[i]) * parseInt(nums[i + 1]) + temp1;
    }
  }
  console.log(temp);
  res2.innerHTML = temp;
};
