let score = 0;
let sequences = [
  "123",
  "234",
  "345",
  "567",
  "456",
  "789",
  "012",
  "abc",
  "zxcv",
  "asdf",
  "qwer",
  "password",
  "pass",
  "def",
  "bcd",
  "xyz",
  "012",
];

function hasRepetitions(pass) {
  var patt = /^([a-zA-Z1-9])\1+$/;
  var result = patt.test(pass);
  var patt2 = /^(.+)\1+$/.test(pass);

  if (result == false && patt2 == false) return false;
  else return true;
}

function hasSequence(pass) {
  for (var i = 0; i < sequences.length; i++) {
    if (pass.includes(sequences[i])) return true;
  }
  return false;
}

function isLongEgnough(password) {
  if (password.length < 10) {
    return false;
  } else {
    return true;
  }
}
function hasCharacters(password) {
  var matchedif = new Array();
  matchedif.push("[$@$!%*#?&]"); // Special Charector
  matchedif.push("[A-Z]"); // Upperif Alpabates
  matchedif.push("[0-9]"); // Numbers
  matchedif.push("[a-z]"); // Lowerif Alphabates

  // Check the conditions
  var ctr = 0;
  for (var i = 0; i < matchedif.length; i++) {
    if (new RegExp(matchedif[i]).test(password)) {
      ctr = ctr + 10;
    }
  }
  score = score + ctr;
}

function checkPassword(pass) {
  if (isLongEgnough(pass)) {
    score = score + 20;
  }
  if (!hasSequence(pass)) {
    score = score + 20;
  } else {
    score = score - 20;
    return;
  }
  if (!hasRepetitions(pass)) {
    score = score + 20;
  }
  if (!hasRepetitions(pass) && !isLongEgnough(pass)) {
    score = score - 20;
  }
  if (hasSequence(pass) && !isLongEgnough(pass)) {
    score = score - 20;
  }
  hasCharacters(pass);
}

function showPassStrength() {
  var color;
    if (0 < score < 10)
      color = "#FF0000";
else
    if (10 < score < 20)
      color = "#ED1C24";
else
    if (20 < score < 30)
      color = "#C40233";
else
    if (30 < score < 40)
      color = "#ED2939";
else
    if (40 < score < 50)
      color = "#E44D2E";
else
    if (50 < score < 60)
      color = "#FF8200";
else
    if (60 < score < 70)
      color = "#FF9966";
else
    if (70 < score < 80)
      color = "#71BC78";
else
    if (80 < score < 90)
      color = "#228B22";
  document.getElementById("gradient").style.background = color;
  console.log(color);
}

document.getElementById("pass-input").addEventListener("change", function () {
  let pass = document.getElementById("pass-input").value;
  checkPassword(pass);
  showPassStrength();
});
document.getElementById("pass-input").addEventListener("keyup", function () {
  let pass = document.getElementById("pass-input").value;
  checkPassword(pass);
  showPassStrength();
});
document.getElementById("pass-input").addEventListener("paste", function () {
  let pass = document.getElementById("pass-input").value;
  checkPassword(pass);
  showPassStrength();
});
