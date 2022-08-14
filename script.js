let answer0 = document.getElementsByClassName("answer")[0];
answer0.style.display = "none";

let answer1 = document.getElementsByClassName("answer")[1];
answer1.style.display = "none";

let answer2 = document.getElementsByClassName("answer")[2];
answer2.style.display = "none";

let answer3 = document.getElementsByClassName("answer")[3];
answer3.style.display = "none";

let answer4 = document.getElementsByClassName("answer")[4];
answer4.style.display = "none";

let answer5 = document.getElementsByClassName("answer")[5];
answer5.style.display = "none";

function collapse(num) {
  let answer = document.getElementsByClassName("answer")[num];
  let question = document.getElementsByClassName("question")[num];
  let plus = document.getElementsByClassName("plus")[num];
  let xmark = document.getElementsByClassName("xmark")[num];
  if (answer.getAttribute("style").includes("none")) {
    answer.style.display = "block";
    question.style.marginBottom = "0px";
    question.style.borderBottom = "1px solid black";
    plus.style.display = "none";
    xmark.style.display = "block";
  } else if (answer.getAttribute("style").includes("block")) {
    answer.style.display = "none";
    question.style.marginBottom = "10px";
    question.style.borderBottom = "none";
    plus.style.display = "block";
    xmark.style.display = "none";
  }
}
