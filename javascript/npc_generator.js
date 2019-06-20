// document.getElementById('date').innerHTML = new Date().toDateString();

//////////////////// READING JSON FILE ////////////////////
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

var npc_json = null;

readTextFile(
  "https://raw.githubusercontent.com/CodingDonky/CodingDonky.github.io/\
master/json/npc_generation_options.json", function(text){
  npc_json = JSON.parse(text);
  // console.log(Object.keys(npc_json))
  // console.log(npc_json.dog)
  // console.log(npc_json);
});
//////////////////// READING JSON FILE ////////////////////

//////////////////// NPC CLASS DEFINITION ////////////////////
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
//////////////////// NPC CLASS DEFINITION ////////////////////


function getRandomListElement( data_list ) {
  var list_element = data_list[ Math.floor(Math.random()*data_list.length) ];
  return list_element;
}

//////////////////// MOUSEDOWN for NPC GENERATOR BUTTON ////////////////////
function mouseDown_generateNPC(obj){
  print_contents = "";
  // Object.keys(npc_json)

  var c = npc_json.combat-focus
  console.log( c );
  console.log( c.classes );
  // console.log( c.classes[0] );

  name = getRandomListElement( npc_json.names )
  print_contents += 'name: ' + name + '<br>';
  npc.name = name

  gender = getRandomListElement( npc_json.genders )
  print_contents += 'gender: ' + gender + '<br>';

  mannerism = getRandomListElement( npc_json.mannerisms )
  print_contents += 'mannerism: ' + mannerism + '<br>';

  quirk = getRandomListElement( npc_json.quirks )
  print_contents += 'quirk: ' + quirk + '<br>';

  race = getRandomListElement( npc_json.races )
  print_contents += 'race: ' + race + '<br>';

  weakness = getRandomListElement( npc_json.weaknesses )
  print_contents += 'weakness: ' + weakness + '<br>';

  strength = getRandomListElement( npc_json.strengths )
  print_contents += 'strength: ' + strength + '<br>';


  // generate combat-focused NPC
  if( document.getElementById("npc_type_radio_combat").checked ){
    print_contents = generate_combat_npc( print_contents );
  }// generate town-focused NPC
  else if( document.getElementById("npc_type_radio_town").checked ){
    print_contents = generate_town_npc( print_contents );
  }// generate exploration-focused NPC
  else if( document.getElementById("npc_type_radio_explore").checked ){
    print_contents = generate_exploration_npc( print_contents );
  }

  document.getElementById('print_output').innerHTML = print_contents;
}

function generate_combat_npc( print_contents ) {
  combat_class = getRandomListElement( npc_json.combat-focus.classes );
  print_contents += 'class: ' + combat_class + '<br>';

  posse = getRandomListElement( npc_json.combat-focus.posse );
  print_contents += 'posse: ' + posse + '<br>';

  ability = getRandomListElement( npc_json.combat-focus.abilities );
  print_contents += 'ability: ' + ability + '<br>';

  combat_style = getRandomListElement( npc_json.combat-focus.combat_styles );
  print_contents += 'combat_style: ' + combat_style + '<br>';

  loot = getRandomListElement( npc_json.combat-focus.loot );
  print_contents += 'loot: ' + loot + '<br>';

  long_term_goal = getRandomListElement( npc_json.combat-focus.long_term_goals );
  print_contents += 'long_term_goal: ' + long_term_goal + '<br>';

  post_long_term_goal = getRandomListElement( 
    npc_json.combat-focus.post_long_term_goals );
  print_contents += 'post_long_term_goal: ' + post_long_term_goal + '<br>';

  return print_contents
}

function generate_town_npc( print_contents ) {
  job = getRandomListElement( npc_json.city-focus.jobs );
  print_contents += 'job: ' + job + '<br>';

  skill_level = getRandomListElement( npc_json.city-focus.skill_levels );
  print_contents += 'skill_level: ' + skill_level + '<br>';
  
  trustworthiness = getRandomListElement( npc_json.city-focus.trustworthiness );
  print_contents += 'trustworthiness: ' + trustworthiness + '<br>';

  friendliness = getRandomListElement( npc_json.city-focus.friendliness );
  print_contents += 'friendliness: ' + friendliness + '<br>';

  house_material = getRandomListElement( npc_json.city-focus.house_material );
  house_type = getRandomListElement( npc_json.city-focus.house_type );
  house_adj = getRandomListElement( npc_json.city-focus.house_adj );
  house_description = house_adj + ' ' + house_material + ' ' + house_adj;
  print_contents += 'domicile: ' + house_description + '<br>';

  nobility_status = getRandomListElement( npc_json.city-focus.nobility_status );
  print_contents += 'nobility_status: ' + nobility_status + '<br>';

  pet = getRandomListElement( npc_json.city-focus.pets );
  print_contents += 'pet: ' + pet + '<br>';

  return print_contents
}

function generate_exploration_npc( print_contents ) {
  sleep_location = getRandomListElement( npc_json.exploration-focus.sleep_locations );
  print_contents += 'sleep_location: ' + sleep_location + '<br>';
  
  motivation = getRandomListElement( npc_json.exploration-focus.motivation );
  print_contents += 'motivation: ' + motivation + '<br>';

  free_time_activity = getRandomListElement( 
    npc_json.exploration-focus.free_time_activities );
  print_contents += 'free_time_activity: ' + free_time_activity + '<br>';

  return print_contents
}
//////////////////// MOUSEDOWN for NPC GENERATOR BUTTON ////////////////////