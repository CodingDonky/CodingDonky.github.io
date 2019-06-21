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
  // console.log(npc_json["combat-focus"]["classes_expanded"]["barbarian"])

  name = getRandomListElement( npc_json.names )
  print_contents += 'name: ' + name + '<br>';
  npc.name = name

  race = getRandomListElement( npc_json.races )
  print_contents += 'race: ' + race + '<br>';

  gender = getRandomListElement( npc_json.genders )
  print_contents += 'gender: ' + gender + '<br>';

  print_contents += "<br>* Personality Traits *<br><br>"

  mannerism = getRandomListElement( npc_json.mannerisms )
  print_contents += 'mannerism: ' + mannerism + '<br>';

  personality_quirk = getRandomListElement( npc_json.personality_quirks )
  personality_quirk2 = getRandomListElement( npc_json.personality_quirks )
  print_contents += 'personality: ' + personality_quirk + ', ' + personality_quirk2 + '<br>';

  physical_quirk = getRandomListElement( npc_json.physical_quirks )
  physical_quirk2 = getRandomListElement( npc_json.physical_quirks )
  print_contents += 'physical quirks: ' + physical_quirk + ', ' + physical_quirk2 + '<br>';

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
    print_contents = generate_combat_npc( print_contents );
  }

  document.getElementById('print_output').innerHTML = print_contents;
}

function generate_combat_npc( print_contents ) {
  print_contents += "<br>* Combat Traits *<br><br>"
  var npc_json_combat = npc_json["combat-focus"]

  combat_class = getRandomListElement( npc_json_combat.classes );
  print_contents += 'class: ' + combat_class + '<br>';

  posse = getRandomListElement( npc_json_combat.posse );
  print_contents += 'posse: ' + posse + '<br>';

  feat = getRandomListElement( npc_json_combat.feats );
  print_contents += 'feat: ' + feat + '<br>';

  ability = getRandomListElement( npc_json_combat.abilities );
  print_contents += 'ability: ' + ability + '<br>';

  combat_style = getRandomListElement( npc_json_combat.combat_styles );
  print_contents += 'combat_style: ' + combat_style + '<br>';

  loot = getRandomListElement( npc_json_combat.loot );
  print_contents += 'loot: ' + loot + '<br>';

  long_term_goal = getRandomListElement( npc_json_combat.long_term_goals );
  print_contents += 'long_term_goal: ' + long_term_goal + '<br>';

  post_long_term_goal = getRandomListElement( 
    npc_json_combat.post_long_term_goals );
  print_contents += 'post_long_term_goal: ' + post_long_term_goal + '<br>';

  return print_contents
}

function generate_town_npc( print_contents ) {
  print_contents += "<br>* City Traits *<br><br>"
  var npc_json_city = npc_json["city-focus"]

  job = getRandomListElement( npc_json_city.jobs );
  print_contents += 'job: ' + job + '<br>';

  skill_level = getRandomListElement( npc_json_city.skill_levels );
  print_contents += 'skill_level: ' + skill_level + '<br>';
  
  trustworthiness = getRandomListElement( npc_json_city.trustworthiness );
  print_contents += 'trustworthiness: ' + trustworthiness + '<br>';

  friendliness = getRandomListElement( npc_json_city.friendliness );
  print_contents += 'friendliness: ' + friendliness + '<br>';

  house_material = getRandomListElement( npc_json_city.house_material );
  house_type = getRandomListElement( npc_json_city.house_type );
  house_adj = getRandomListElement( npc_json_city.house_adj );
  house_description = house_adj + ' ' + house_material + ' ' + house_type;
  print_contents += 'domicile: ' + house_description + '<br>';

  nobility_status = getRandomListElement( npc_json_city.nobility_status );
  print_contents += 'nobility_status: ' + nobility_status + '<br>';

  pet = getRandomListElement( npc_json_city.pets );
  print_contents += 'pet: ' + pet + '<br>';

  return print_contents
}

function generate_exploration_npc( print_contents ) {
  print_contents += "<br>* Exploration Traits *<br><br>"
  var npc_json_explore = npc_json["exploration-focus"]

  sleep_location = getRandomListElement( npc_json_explore.sleep_locations );
  print_contents += 'sleep location: ' + sleep_location + '<br>';
  
  motivation = getRandomListElement( npc_json_explore.motivation );
  print_contents += 'motivation: ' + motivation + '<br>';

  free_time_activity = getRandomListElement( 
    npc_json_explore.free_time_activities );
  print_contents += 'how they spend their free time: ' + free_time_activity + '<br>';

  return print_contents
}
//////////////////// MOUSEDOWN for NPC GENERATOR BUTTON ////////////////////