// document.getElementById('date').innerHTML = new Date().toDateString();

// READING JSON FILE
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

readTextFile(
  "https://raw.githubusercontent.com/CodingDonky/CodingDonky.github.io/\
master/json/npc_generation_options.json", function(text){
  var npc_data = JSON.parse(text);
  // console.log(Object.keys(npc_data))
  // console.log(npc_data.dog)
  // console.log(npc_data);
});
// READING JSON FILE

function getRandomListElement( data_list ) {
  var list_element = data_list[ Math.floor(Math.random()*data_list.length) ];
  return list_element;
}

function mouseDown_generateNPC(obj){
  print_contents = "";

  // generate combat-focused NPC
  if( document.getElementById("npc_type_radio_combat").checked ){
    print_contents += Object.keys(npc_data)[0];
  }// generate town-focused NPC
  else if( document.getElementById("npc_type_radio_town").checked ){
    print_contents += Object.keys(npc_data)[0];
  }// generate exploration-focused NPC
  else if( document.getElementById("npc_type_radio_explore").checked ){
    print_contents += Object.keys(npc_data)[0];
  }

  document.getElementById('print_output').innerHTML = print_contents;
}


class NPC {
    constructor(name) {
      this.name = name;
      this.occupation = "";
      this.height = 0;
      this.width = 0;
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
