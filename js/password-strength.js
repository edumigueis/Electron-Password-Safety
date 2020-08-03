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
  "012"
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
  if (password.length < 9) {
    return false;
  } else {
    return true;
  }
}
function hasCharacters(password) {
  var matchedCase = new Array();
  matchedCase.push("[$@$!%*#?&]"); // Special Charector
  matchedCase.push("[A-Z]"); // Uppercase Alpabates
  matchedCase.push("[0-9]"); // Numbers
  matchedCase.push("[a-z]"); // Lowercase Alphabates

  // Check the conditions
  var ctr = 0;
  for (var i = 0; i < matchedCase.length; i++) {
    if (new RegExp(matchedCase[i]).test(password)) {
      ctr = ctr + 10;
    }
  }
  score = score + ctr;
}
