var array = [];
var emojiArray = ["👨", "‍", "👩", "‍", "👧", "‍", "👦", "😰","👿","👺","💩","👻","👽","😺","🎃","🤖","😸","😻","🤞","🤘"];
var curButton;
var curQuestion;
var counter = 0;

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', afterLoaded);
} else {
    //The DOMContentLoaded event has already fired. Just run the code.
    afterLoaded();
}

function afterLoaded() {
  console.log(document.getElementById("mainBody"));
  for (var i = 0; i < 100; i++) {
    array[i] = document.createElement("button");
    array[i].innerHTML = "?";
    array[i].id = "" + i + "";
    array[i].addEventListener("mouseover", randomEvent);
    array[i].addEventListener("click", reset);
    document.getElementById("mainBody").appendChild(array[i]);
  }
}


function randomEvent(e) {
  var currentId = e.path[0].id;
  var num = Math.random();
  counter += 1;

  if (counter > 150) {
    document.getElementById("count").innerHTML = "You've hovered " + counter + " times! Take time to admire your art 😱";
  } else {
    document.getElementById("count").innerHTML = "You've hovered " + counter + " times!";
  }


  if (num >= 0 && num < 0.2) {
  document.getElementById(currentId).style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

} else if (num >= 0.2 && num < 0.4) {
  for (var i = 0; i < 100; i++) {
  document.getElementById("" + i + "").style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  document.getElementById("" + i + "").style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }
} else if (num >= 0.4 && num < 0.5) {
  document.getElementById(currentId).style.border = "10px double";
} else if (num >= 0.5 && num < 0.65) {
  var colorChoice = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  for (var i = 0; i < 100; i++) {
  document.getElementById("" + i + "").style.backgroundColor = colorChoice;
  }
} else if (num >= 0.65 && num < 0.9) {
  document.getElementById(currentId).innerHTML = emojiArray[Math.floor(Math.random() * 20)];

} else if (num >= 0.9 && num <= 10) {
  for (var i = 0; i < 100; i++) {
    document.getElementById("" + i + "").style.color = "black";
  }
}

  if (Math.random() > 0.4) {
  document.getElementById(currentId).style.width = "" + Math.random() * 100 + "%";
  if (num > 0.5) {
    if (num > 0.7) {
      document.getElementById(currentId).style.border = "thin dotted";
      if (num > 0.8) {
        document.getElementById(currentId).style.border = "thin dashed";
      }
    } else {
      document.getElementById(currentId).style.border = "thick dashed";
      if (num > 0.6) {
        document.getElementById(currentId).style.border = "thick dotted";
      } else if (num > 0.9) {
        document.getElementById(currentId).style.border = "thick double";
      }
    }
  }
} else {
  document.getElementById(currentId).style.border = "none";
}

}


function reset() {
  for (var i = 0; i < 100; i++) {
    document.getElementById("" + i + "").style.width = "25%";
    document.getElementById("" + i + "").style.color = "black";
    document.getElementById("" + i + "").style.backgroundColor = "white";
    document.getElementById("" + i + "").style.border = "none";
    document.getElementById("" + i + "").innerHTML = "?";
  }
}
