var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
      theDojo[i][j] = 0;
    }
  }
  for (var k = 0; k < 10; k++) {
    var random_i = Math.floor(Math.random() * 10);
    var random_j = Math.floor(Math.random() * 10);
    theDojo[random_i][random_j] = 1;
  }
  console.log(theDojo);
  return result;
}
    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {  
  var ninjas = 0;
  if (i == 0) {
    for (var k = i; k <= (i + 1); k++) {
      for (var l = (j - 1); l <= (j + 1); l++) {
        if (typeof(theDojo[k][l]) === "number") {
          ninjas += theDojo[k][l];   
        }
      }
    }
    ninjas -= theDojo[i][j];
  }
  else if (i == 9) {
    for (var k = i - 1; k <= i; k++) {
      for (var l = j -1; l <= j + 1; l++) {
        if (typeof(theDojo[k][l]) === "number") {
          ninjas += theDojo[k][l];
        }
      }
    }
    ninjas -= theDojo[i][j];
  }
  else {
  for (var k = i - 1; k <= i + 1; k++) {
    for (var l = j - 1; l <= j + 1; l++) {
      if (typeof(theDojo[k][l]) === "number") {
        ninjas += theDojo[k][l]; 
      }
    }
  }
  ninjas -= theDojo[i][j];
}
if (theDojo[i][j] == 1) {
  console.log("game over");
  // location.reload();
  dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
}
  console.log(ninjas);
  console.log({i, j});
  // alert(ninjas);
  element.innerHTML = ninjas;
}
    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

