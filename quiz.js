var go = document.querySelector("#go");
var torem = document.querySelector("#torem");
var clock = document.querySelector(".clock");
var max = 02;
var ques = document.querySelector(".ques");
var next = document.querySelector("#next");
var correct = 0;
var body = document.querySelector("#boday");
// var corr=document.querySelector(".corr");
// var perc=document.querySelector(".perc");
// var qh=document.querySelector(".qheading");
var percentage = 0;
var correct = 0;
var jay = 0;
var hila = null;
var boole = false;

window.onload = function() {
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var Interval;

  go.onclick = function() {
    torem.innerHTML = "";



    // clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);

    ques.style.display = "block";
    next.style.display = "block";


  ques.innerHTML = questions[0];
    for (var j = 0; j < 4; j++) {
      $("ol").append(
        "<li><input type='radio' name='same'>"  + obj[counter][0][j] + "</li>"
      );
    }
checking();
  };
  var counter = 0;
  // ques.innerHTML = questions[0];


  if (counter < questions.length) {
    next.onclick = function() {
      jay++;
      choices.innerHTML = "";
      counter++;
      if (counter < questions.length) {
        ques.innerHTML = questions[counter];

        for (var j = 0; j < 4; j++) {
          $("ol").append(
            "<li><input type='radio' name='same'>" + obj[counter][0][j] + "</li>"
          );

          if (counter == 9) {
            next.textContent = "Result";
            next.style.background = "#1B62DB";

          }
        }
      } else {
        ques.innerHTML = "";
        next.style.display = "none";
        clock.innerHTML = "00:00";
        result();
      }

checking();
    };
  }

  function startTimer() {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 59) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds == 01 && tens >= 50) {
      clock.style.background = "red";
      clock.style.border = "3px solid #CB1010";
    }

    if (seconds == max) {
      seconds = max;
      tens = 0;
      clock.innerHTML = "0" + seconds + ":0" + tens;
      clearInterval(Interval);
      return result();
    }
  }
};
var questions = [
  "Q1: Javascript is _________ language.",
  "Q2: JavaScript is designed for following purpose -",
  "Q3: JavaScript is ______ Side Scripting Language.",
  "Q4: How can you get the type of arguments passed to a function?",
  "Q5:  Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
  "Q6: Which built-in method returns the calling string value converted to lower case?",
  "Q7: Which of the following function of Number object defines how many total digits to display of a number?",
  "Q8: Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
  "Q9: Which of the following function of String object creates an HTML hypertext link that requests another URL?",
  "Q10: Which of the following function of Array object returns true if at least one element in this array satisfies the provided testing function?"
];
var answers = [
  "Scriptin",
  "To add interactivity to HTML pages",
  "Browser",
  "Using typeof operator",
  "push",
  "toLowerCase()",
  "toPrecision()",
  "indexOf()",
  "link()",
  "some()"
];
var obj = [
  [["Programming", answers[0], "Application", "None of These"]],
  [
    [
      "To Style HTML Pages",

      "To Perform Server Side Scripting Opertion",
      answers[1],

      "To Execute Query Related to DB on Server"
    ]
  ],
  [["programming", "Application", "None of these", answers[2]]],
  [
    [
      answers[3],
      "using getType function",
      "Both of the above",
      "None of the above"
    ]
  ],
  [["last()", "put()", answers[4], "None of the above"]],
  [[answers[5], "toLower()", "changeCase(case)", "None of the above"]],
  [["toExponential()", answers[6], "toFixed()", "toLocalString()"]],
  [["join()", answers[7], "lastIndexof()", "map()"]],
  [[answers[8], "sub()", "sup()", "small()"]],
  [["reverse()", "shift()", "slice", answers[9]]]
];
var choices = document.querySelector("ol");
var lists = document.querySelector("li");
var clos = document.querySelector(".clos").innerHTML;

function result() {
  percentage = correct * 100 / 10 + "%";
  body.innerHTML = clos;
  // corr.textContent="5";
  console.log("result");
  // perc.textContent=percentage;

  var corr = document.querySelector("#corrected");
  var perc = document.querySelector(".perc");

  corr.textContent = correct;
  perc.textContent = percentage;
  var qh=document.querySelector(".heading");
  var hy=document.querySelector("#hy");
  if (correct<4){
  hy.innerHTML="FAIL";
  qh.style.background="red";

}else{
   hy.textContent="PASS";
  qh.style.background="green";

}
}

function checking() {
  var listItem = document.querySelectorAll("ol li > input");

  for (var i = 0; i < 4; i++) {
    listItem[i].addEventListener("click", function() {
      for (var i = 0; i < 4; i++) {
        var listItemSelect = document.querySelectorAll("ol li > input");
        var listItemSelectText = document.querySelectorAll("ol li ");

        if (listItemSelect[i].checked == true) {
          hila = listItemSelectText[i].textContent;

          if (hila == answers[jay]) {
            correct++;
          }
        }
      }
    });
  }

}
