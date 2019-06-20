// document.getElementById('date').innerHTML = new Date().toDateString();

// document.getElementById("demo").onclick = function() {
//     myFunction()};

// $.getJSON("test.json", function(json) {
//   console.log(json); // this will show the info it in firebug console
// });

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

//usage:
// readTextFile("test.json", function(text){
  readTextFile("http://mysafeinfo.com/api/data?list=englishmonarchs&format=json", function(text){
  
  var data = JSON.parse(text);
  // console.log('hi')
  window.alert(data)
  window.alert(data.error)
  console.log(data);
});

readTextFile()

function myFunction() {
    // Popup window with a message
    window.alert( document.getElementById("npc_type_radio_combat").checked  ); 
    window.alert( document.getElementById("npc_type_radio_town").checked  ); 
    window.alert( document.getElementById("npc_type_radio_wild").checked  ); 
    // window.alert( document.getElementById("x").value  ); 
    // document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}


class NPC {
    constructor(name) {
      this.name = name;
      this.occupation = "";
      this.height = 0
      this.width = 0
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
const npc = new NPC("[REDACTED]");
// console.log(npc.area);

//////////////////// NAME BUTTON STUFF ////////////////////
function mouseDown_name(obj){
  // set random name
  random_name = getRandomName()
  changeName( random_name )
  // obj.style.backgroundColor = "#1ec5e5";
  // obj.innerHTML = "Release Me";
}function mouseUp_name(obj) {
  // obj.style.backgroundColor = "#D94A38";
  // obj.innerHTML = "Generate Random Name";
}

function getRandomName(){
  var name_list = Array('bob','dood','scarface','shia');
  var name = name_list[ Math.floor(Math.random()*name_list.length) ];

  return name
}

function changeName( name ) {
  document.getElementById("name_field").value = name;
  npc.name = name;
}
//////////////////// NAME BUTTON STUFF ////////////////////

//////////////////// OCCUPATION BUTTON STUFF ////////////////////
function mouseDown_occupation(obj){
  random_occupation = getRandomOccupation()
  changeOccupation( random_occupation )
}
function getRandomOccupation(){
  var occ_list = Array('Smith','Guard','Shopkeep','Farmer');
  var occ = occ_list[ Math.floor(Math.random()*occ_list.length) ];

  return occ
}
function changeOccupation( occ ) {
  document.getElementById("occupation_field").value = occ;
  npc.occupation = occ;
}
//////////////////// OCCUPATION BUTTON STUFF ////////////////////
