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

//////////////////// READING TEXT FILE ////////////////////
var name_list = null

function setNamesList( names ){
  name_list = names.split('\n')
}

// provide file location
const nameFileUrl = 'https://raw.githubusercontent.com/dominictarr/random-name/master/first-names.txt' 
// read txt file from url
fetch(nameFileUrl)
   .then( r => r.text() )
   .then( t => setNamesList(t) )
//////////////////// READING TEXT FILE ////////////////////




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

function make_formatted_choice_string( data_list, title, num_elements ){
  text = '<h5>'+title+':</h5> <h4>';
  for( i=0; i<num_elements; i++){
    if( i==0 ){
      text += getRandomListElement( data_list );
    }else{
      text += ', '+getRandomListElement( data_list );
    }
    // choices.append( getRandomListElement( data_list ) );
  }
  text += '</h4><br>';

  return text
}

// function make_formatted_choice_string( data_list, title ){
//   chosen_val = getRandomListElement( data_list );
//   return '<h5>'+title+':</h5> <h4>' + chosen_val + '</h4><br>';
// }

function make_formatted_section_title( text ){
  return "<br>* <h6>"+text+"</h6> *<br><br>";
}

//////////////////// MOUSEDOWN for NPC GENERATOR BUTTON ////////////////////
function mouseDown_generateNPC(obj){
  var print_contents = "";
  // Object.keys(npc_json)
  // console.log(npc_json["combat-focus"]["classes_expanded"]["barbarian"])

  print_contents += make_formatted_choice_string( name_list, 'name', 1 );
  //name = getRandomListElement( name_list )
  // print_contents += 'name: ' + name + '<br>';
  // npc.name = name

  print_contents += make_formatted_choice_string( npc_json.races, 'race', 1 );
  // race = getRandomListElement( npc_json.races )
  // print_contents += 'race: ' + race + '<br>';

  print_contents += make_formatted_choice_string( npc_json.alignments, 'alignment', 1 );
  // alignment = getRandomListElement( npc_json.alignments )
  // print_contents += 'alignment: ' + alignment + '<br>';

  // gender = getRandomListElement( npc_json.genders )
  // print_contents += 'gender: ' + gender + '<br>';

  print_contents += make_formatted_section_title('Personality Traits');
  // print_contents += "<br>* Personality Traits *<br><br>"

  print_contents += make_formatted_choice_string( npc_json.mannerisms, 'mannerism', 1 );
  // mannerism = getRandomListElement( npc_json.mannerisms )
  // print_contents += 'mannerism: ' + mannerism + '<br>';

  print_contents += make_formatted_choice_string( npc_json.personality_quirks, 'personality', 2 );
  // personality_quirk = getRandomListElement( npc_json.personality_quirks )
  // personality_quirk2 = getRandomListElement( npc_json.personality_quirks )
  // print_contents += 'personality: ' + personality_quirk + ', ' + personality_quirk2 + '<br>';

  print_contents += make_formatted_choice_string( npc_json.physical_quirks, 'physical quirks', 2 );
  // physical_quirk = getRandomListElement( npc_json.physical_quirks )
  // physical_quirk2 = getRandomListElement( npc_json.physical_quirks )
  // print_contents += 'physical quirks: ' + physical_quirk + ', ' + physical_quirk2 + '<br>';

  print_contents += make_formatted_choice_string( npc_json.weaknesses, 'weakness', 1 );
  // weakness = getRandomListElement( npc_json.weaknesses )
  // print_contents += 'weakness: ' + weakness + '<br>';

  print_contents += make_formatted_choice_string( npc_json.strengths, 'strength', 1 );
  // strength = getRandomListElement( npc_json.strengths )
  // print_contents += 'strength: ' + strength + '<br>';


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
  var npc_json_combat = npc_json["combat-focus"]

  // print_contents += "<br>* Combat Traits *<br><br>"
  print_contents += make_formatted_section_title('Combat Traits');

  print_contents += make_formatted_choice_string( npc_json_combat.classes, 'class', 1 );
  // combat_class = getRandomListElement( npc_json_combat.classes );
  // print_contents += 'class: ' + combat_class + '<br>';

  print_contents += make_formatted_choice_string( npc_json_combat.posse, 'posse', 1 );
  // posse = getRandomListElement( npc_json_combat.posse );
  // print_contents += 'posse: ' + posse + '<br>';

  print_contents += make_formatted_choice_string( npc_json_combat.feats, 'feat', 1 );
  // feat = getRandomListElement( npc_json_combat.feats );
  // print_contents += 'feat: ' + feat + '<br>';

  print_contents += make_formatted_choice_string( npc_json_combat.abilities, 'ability', 1 );
  // ability = getRandomListElement( npc_json_combat.abilities );
  // print_contents += 'ability: ' + ability + '<br>';

  print_contents += make_formatted_choice_string( npc_json_combat.combat_styles, 'combat_style', 1 );
  // combat_style = getRandomListElement( npc_json_combat.combat_styles );
  // print_contents += 'combat_style: ' + combat_style + '<br>';

  print_contents += make_formatted_choice_string( npc_json_combat.loot, 'loot', 1 );
  // loot = getRandomListElement( npc_json_combat.loot );
  // print_contents += 'loot: ' + loot + '<br>';

  print_contents += make_formatted_choice_string( npc_json_combat.long_term_goals, 'long term goal', 1 );
  // long_term_goal = getRandomListElement( npc_json_combat.long_term_goals );
  // print_contents += 'long_term_goal: ' + long_term_goal + '<br>';

  print_contents += make_formatted_choice_string( npc_json_combat.post_long_term_goals, 
                                                  'post long term goal', 1 );
  // post_long_term_goal = getRandomListElement( 
  //                         npc_json_combat.post_long_term_goals );
  // print_contents += 'post_long_term_goal: ' + post_long_term_goal + '<br>';

  return print_contents
}

function generate_town_npc( print_contents ) {
  print_contents += make_formatted_section_title('City Traits');
  // print_contents += "<br>* City Traits *<br><br>"
  
  var npc_json_city = npc_json["city-focus"]

  job = getRandomListElement( npc_json_city.jobs );
  skill_level = getRandomListElement( npc_json_city.skill_levels );
  print_contents += '<h5>job:</h5> <h4>' + skill_level + " " + job + '</h4><br>';

  // skill_level = getRandomListElement( npc_json_city.skill_levels );
  // print_contents += 'skill_level: ' + skill_level + '<br>';
  
  print_contents += make_formatted_choice_string( npc_json_city.trustworthiness, 'trustworthiness', 1 );
  // trustworthiness = getRandomListElement( npc_json_city.trustworthiness );
  // print_contents += 'trustworthiness: ' + trustworthiness + '<br>';

  print_contents += make_formatted_choice_string( npc_json_city.demeanors, 'demeanor', 1 );
  // demeanor = getRandomListElement( npc_json_city.demeanors );
  // print_contents += 'demeanor: ' + demeanor + '<br>';

  house_material = getRandomListElement( npc_json_city.house_material );
  house_type = getRandomListElement( npc_json_city.house_type );
  house_adj = getRandomListElement( npc_json_city.house_adj );
  house_description = house_adj + ' ' + house_material + ' ' + house_type;
  print_contents += '<h5>domicile:</h5> <h4>' + house_description + '</h4><br>';

  print_contents += make_formatted_choice_string( npc_json_city.nobility_status, 'nobility status', 1 );
  // nobility_status = getRandomListElement( npc_json_city.nobility_status );
  // print_contents += 'nobility_status: ' + nobility_status + '<br>';

  print_contents += make_formatted_choice_string( npc_json_city.pets, 'pet', 1 );
  // pet = getRandomListElement( npc_json_city.pets );
  // print_contents += 'pet: ' + pet + '<br>';

  return print_contents
}

function generate_exploration_npc( print_contents ) {
  var npc_json_explore = npc_json["exploration-focus"]

  print_contents += make_formatted_section_title('Exploration Traits');
  // print_contents += "<br>* Exploration Traits *<br><br>"

  print_contents += make_formatted_choice_string( npc_json_explore.sleep_locations, 'sleep location', 1 );
  // sleep_location = getRandomListElement( npc_json_explore.sleep_locations );
  // print_contents += 'sleep location: ' + sleep_location + '<br>';
  
  print_contents += make_formatted_choice_string( npc_json_explore.motivation, 'motivation', 1 );
  // motivation = getRandomListElement( npc_json_explore.motivation );
  // print_contents += 'motivation: ' + motivation + '<br>';

  print_contents += make_formatted_choice_string( npc_json_explore.free_time_activities, 
                                                  'how they spend their free time', 1 );
  // free_time_activity = getRandomListElement( 
  //   npc_json_explore.free_time_activities );
  // print_contents += 'how they spend their free time: ' + free_time_activity + '<br>';

  return print_contents
}
//////////////////// MOUSEDOWN for NPC GENERATOR BUTTON ////////////////////