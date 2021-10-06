//flag for X and O
let flag = 1;

function checkWinner() {
  //getting button values in a variable
  let b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  if (b1 == "X" && b2 == "X" && b3 == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    //Styling the winner box
    document.getElementById("b1").style.backgroundColor = "Green";
    document.getElementById("b1").style.color = "White";
    document.getElementById("b2").style.backgroundColor = "Green";
    document.getElementById("b2").style.color = "White";
    document.getElementById("b3").style.backgroundColor = "Green";
    document.getElementById("b3").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  } else if (b1 == "X" && b4 == "X" && b7 == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    //Styling the winner box
    document.getElementById("b1").style.backgroundColor = "Green";
    document.getElementById("b1").style.color = "White";
    document.getElementById("b4").style.backgroundColor = "Green";
    document.getElementById("b4").style.color = "White";
    document.getElementById("b7").style.backgroundColor = "Green";
    document.getElementById("b7").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  else if (b7 == "X" && b8 == "X" && b9 == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b4").disabled = true;
    //Styling the winner box
    document.getElementById("b7").style.backgroundColor = "Green";
    document.getElementById("b7").style.color = "White";
    document.getElementById("b8").style.backgroundColor = "Green";
    document.getElementById("b8").style.color = "White";
    document.getElementById("b9").style.backgroundColor = "Green";
    document.getElementById("b9").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  else if (b3 == "X" && b6 == "X" && b9 == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b4").disabled = true;
    //Styling the winner box
    document.getElementById("b3").style.backgroundColor = "Green";
    document.getElementById("b3").style.color = "White";
    document.getElementById("b6").style.backgroundColor = "Green";
    document.getElementById("b6").style.color = "White";
    document.getElementById("b9").style.backgroundColor = "Green";
    document.getElementById("b9").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  else if (b4 == "X" && b5 == "X" && b6 == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b9").disabled = true;
    //Styling the winner box
    document.getElementById("b4").style.backgroundColor = "Green";
    document.getElementById("b4").style.color = "White";
    document.getElementById("b6").style.backgroundColor = "Green";
    document.getElementById("b6").style.color = "White";
    document.getElementById("b5").style.backgroundColor = "Green";
    document.getElementById("b5").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  else if (b2 == "X" && b5 == "X" && b8 == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b9").disabled = true;
    //Styling the winner box
    document.getElementById("b2").style.backgroundColor = "Green";
    document.getElementById("b2").style.color = "White";
    document.getElementById("b8").style.backgroundColor = "Green";
    document.getElementById("b8").style.color = "White";
    document.getElementById("b5").style.backgroundColor = "Green";
    document.getElementById("b5").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  else if (b1 == "X" && b5 == "X" && b9 == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b8").disabled = true;
    //Styling the winner box
    document.getElementById("b1").style.backgroundColor = "Green";
    document.getElementById("b1").style.color = "White";
    document.getElementById("b5").style.backgroundColor = "Green";
    document.getElementById("b5").style.color = "White";
    document.getElementById("b9").style.backgroundColor = "Green";
    document.getElementById("b9").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  else if (b3 == "X" && b5 == "X" && b7 == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b8").disabled = true;
    //Styling the winner box
    document.getElementById("b3").style.backgroundColor = "Green";
    document.getElementById("b3").style.color = "White";
    document.getElementById("b5").style.backgroundColor = "Green";
    document.getElementById("b5").style.color = "White";
    document.getElementById("b7").style.backgroundColor = "Green";
    document.getElementById("b7").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  //Checkup for O
  else if (b1 == "O" && b2 == "O" && b3 == "O") {
    document.getElementById("print").innerHTML = "Player O won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    //Styling the winner box
    document.getElementById("b1").style.backgroundColor = "Green";
    document.getElementById("b1").style.color = "White";
    document.getElementById("b2").style.backgroundColor = "Green";
    document.getElementById("b2").style.color = "White";
    document.getElementById("b3").style.backgroundColor = "Green";
    document.getElementById("b3").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  } else if (b1 == "O" && b4 == "O" && b7 == "O") {
    document.getElementById("print").innerHTML = "Player O won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    //Styling the winner box
    document.getElementById("b1").style.backgroundColor = "Green";
    document.getElementById("b1").style.color = "White";
    document.getElementById("b4").style.backgroundColor = "Green";
    document.getElementById("b4").style.color = "White";
    document.getElementById("b7").style.backgroundColor = "Green";
    document.getElementById("b7").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  else if (b7 == "O" && b8 == "O" && b9 == "O") {
    document.getElementById("print").innerHTML = "Player O won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b4").disabled = true;
    //Styling the winner box
    document.getElementById("b7").style.backgroundColor = "Green";
    document.getElementById("b7").style.color = "White";
    document.getElementById("b8").style.backgroundColor = "Green";
    document.getElementById("b8").style.color = "White";
    document.getElementById("b9").style.backgroundColor = "Green";
    document.getElementById("b9").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  else if (b3 == "O" && b6 == "O" && b9 == "O") {
    document.getElementById("print").innerHTML = "Player O won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b4").disabled = true;
    //Styling the winner box
    document.getElementById("b3").style.backgroundColor = "Green";
    document.getElementById("b3").style.color = "White";
    document.getElementById("b6").style.backgroundColor = "Green";
    document.getElementById("b6").style.color = "White";
    document.getElementById("b9").style.backgroundColor = "Green";
    document.getElementById("b9").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  else if (b4 == "O" && b5 == "O" && b6 == "O") {
    document.getElementById("print").innerHTML = "Player O won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b9").disabled = true;
    //Styling the winner box
    document.getElementById("b4").style.backgroundColor = "Green";
    document.getElementById("b4").style.color = "White";
    document.getElementById("b6").style.backgroundColor = "Green";
    document.getElementById("b6").style.color = "White";
    document.getElementById("b5").style.backgroundColor = "Green";
    document.getElementById("b5").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  else if (b2 == "O" && b5 == "O" && b8 == "O") {
    document.getElementById("print").innerHTML = "Player O won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b9").disabled = true;
    //Styling the winner box
    document.getElementById("b2").style.backgroundColor = "Green";
    document.getElementById("b2").style.color = "White";
    document.getElementById("b8").style.backgroundColor = "Green";
    document.getElementById("b8").style.color = "White";
    document.getElementById("b5").style.backgroundColor = "Green";
    document.getElementById("b5").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  else if (b1 == "O" && b5 == "O" && b9 == "O") {
    document.getElementById("print").innerHTML = "Player O won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b8").disabled = true;
    //Styling the winner box
    document.getElementById("b1").style.backgroundColor = "Green";
    document.getElementById("b1").style.color = "White";
    document.getElementById("b5").style.backgroundColor = "Green";
    document.getElementById("b5").style.color = "White";
    document.getElementById("b9").style.backgroundColor = "Green";
    document.getElementById("b9").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  else if (b3 == "O" && b5 == "O" && b7 == "O") {
    document.getElementById("print").innerHTML = "Player O won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b8").disabled = true;
    //Styling the winner box
    document.getElementById("b3").style.backgroundColor = "Green";
    document.getElementById("b3").style.color = "White";
    document.getElementById("b5").style.backgroundColor = "Green";
    document.getElementById("b5").style.color = "White";
    document.getElementById("b7").style.backgroundColor = "Green";
    document.getElementById("b7").style.color = "White";
    document.getElementById("winImage").style.display = "block";
  }
  else if(
    (b1 == "X" || b1 == "O") &&
    (b2 == "X" || b2 == "O") &&
    (b3 == "X" || b3 == "O") &&
    (b4 == "X" || b4 == "O") &&
    (b5 == "X" || b5 == "O") &&
    (b6 == "X" || b6 == "O") &&
    (b7 == "X" || b7 == "O") &&
    (b8 == "X" || b8 == "O") &&
    (b9 == "X" || b9 == "O")
  ){
    document.getElementById("print").innerHTML = "Game tie";
    document.getElementById("winImage").src ="MatchTie.gif"
    document.getElementById("winImage").style.display = "block";
    
  }
}

//Reset Function
function resetBtn() {
  window.location.reload();
}

//Button function
function funcBtn1() {
  if (flag == 1) {
    document.getElementById("b1").value = "X";
    document.getElementById("b1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b1").value = "O";
    document.getElementById("b1").disabled = true;
    flag = 1;
  }
}

function funcBtn2() {
  if (flag == 1) {
    document.getElementById("b2").value = "X";
    document.getElementById("b2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b2").value = "O";
    document.getElementById("b2").disabled = true;
    flag = 1;
  }
}

function funcBtn3() {
  if (flag == 1) {
    document.getElementById("b3").value = "X";
    document.getElementById("b3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b3").value = "O";
    document.getElementById("b3").disabled = true;
    flag = 1;
  }
}

function funcBtn4() {
  if (flag == 1) {
    document.getElementById("b4").value = "X";
    document.getElementById("b4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b4").value = "O";
    document.getElementById("b4").disabled = true;
    flag = 1;
  }
}

function funcBtn5() {
  if (flag == 1) {
    document.getElementById("b5").value = "X";
    document.getElementById("b5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b5").value = "O";
    document.getElementById("b5").disabled = true;
    flag = 1;
  }
}

function funcBtn6() {
  if (flag == 1) {
    document.getElementById("b6").value = "X";
    document.getElementById("b6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b6").value = "O";
    document.getElementById("b6").disabled = true;
    flag = 1;
  }
}

function funcBtn7() {
  if (flag == 1) {
    document.getElementById("b7").value = "X";
    document.getElementById("b7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b7").value = "O";
    document.getElementById("b7").disabled = true;
    flag = 1;
  }
}

function funcBtn8() {
  if (flag == 1) {
    document.getElementById("b8").value = "X";
    document.getElementById("b8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b8").value = "O";
    document.getElementById("b8").disabled = true;
    flag = 1;
  }
}

function funcBtn9() {
  if (flag == 1) {
    document.getElementById("b9").value = "X";
    document.getElementById("b9").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b9").value = "O";
    document.getElementById("b9").disabled = true;
    flag = 1;
  }
}

//Checking for player winning.
