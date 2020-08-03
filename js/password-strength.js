let score = 0;

alert(hasRepetitions("aa"))

function hasRepetitions(pass) {
        var patt = /^([a-z])\1+$/;
        var result = patt.test(pass);
        return result;
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
