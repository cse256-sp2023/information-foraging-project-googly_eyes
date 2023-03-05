// globals
var classClicked = "";
var className = "";
var parentType = "";
export function main() {
  if(document.getElementById("teddy")!=null){
    document.getElementById("age_select").onchange = changeName;
    document.getElementById("class_select").onchange = changeName;
    document.getElementById("teddy").addEventListener("click", classGetter.bind("click", "teddy"));
    document.getElementById("bear").addEventListener("click", classGetter.bind("click", "bear"));
    document.getElementById("big_bears").addEventListener("click", classGetter.bind("click", "big_bears"));
    document.getElementById("prospective-option").addEventListener("click", ()=>{
      parentType = "prospective-option";
      changeStyleClick(parentType, ["prospective-option", "current-option"]);
  
    });
    document.getElementById("current-option").addEventListener("click", ()=>{
      parentType = "current-option";
      changeStyleClick(parentType, ["prospective-option", "current-option"]);
  
    });
  }
  else {
    buttons();
  }
}

export function clickedFinder(idIn){
  parentType = idIn;
  if(className != ""){
    document.getElementById("finder-title").innerHTML = "I am a " + (idIn == "prospective-option"? "prospective " : "current ") + "parent with a " + className + ".";
    showOptions();
  }
  if(className != "" && parentType != ""){
    
  }
}
export function showOptions(){
  var element;
  var current = false;
  if(parentType == "current-option"){
    document.getElementById("prospective-materials").style.visibility = "hidden";
    document.getElementById("current-materials").style.visibility = "visible";
    element = document.getElementById("current-information");
  }
  else {
    document.getElementById("current-materials").style.visibility = "hidden";
    document.getElementById("prospective-materials").style.visibility = "visible";
    element = document.getElementById("prospective-information");
    current = true;
  }
  var file = "files/";
  if(className == "Teddy Bear"){
    file += "teddy_bears";
  }
  else if(className == "Panda Bear"){
    file += "panda_bears";
  }
  else if(className == "Bear Cub"){
    file += "bear_cubs";
  }
  else if(className == "Big Bear"){
    file += "big_bears";
  }
  else {
    file += "sun_bears";
  }
  // if(current){
    var materialsName = file + "_curriculum.html";

    document.getElementById("materials").setAttribute("href", materialsName);
  // }
  file += ".html";
  element.setAttribute("href", file);
  
}
export function classGetter(classname){
  var idname; 
  var hasTwoTimes = false;
  var secondClass = "";
  changeStyleClick("", ["am", "pm"]);
  clear();
  if(classname == "teddy"){
    idname = "Teddy Bear";
    secondClass = "Panda Bear";
    hasTwoTimes = true;  
  }
  if(classname == "bear"){
    idname = "Bear Cub";
    hasTwoTimes = false;  

  }
  if(classname == "big_bears"){
    idname = "Big Bear";
    secondClass = "Sun Bear";
    hasTwoTimes = true;
  }
  className = idname;
  changeStyleClick(classname, ["teddy", "bear", "big_bears"]);

  if(hasTwoTimes){ 
    document.getElementById("ampm").style.visibility = "visible";

    document.getElementById("am").addEventListener("click", ()=>{
      changeStyleClick("am", ["am", "pm"]);
      // clear();
      clickedFinder(parentType);


    });
    document.getElementById("pm").addEventListener("click", ()=>{
      changeStyleClick("pm", ["am", "pm"]);
      // clear();
      className = secondClass;

      clickedFinder(parentType);
    }); 
  }
  else {
    document.getElementById("ampm").style.visibility = "hidden";
    clickedFinder(parentType);
  }
}

export function clear(){
  while(document.getElementsByClassName("show").length > 0){
    document.getElementsByClassName("show").item(0).classList = "display";
  }

}
export function changeStyleClick(idIn, type){
  var item = document.getElementById(idIn);
  if(item != null){
    item.style.backgroundColor = "lightblue";
  }
  for(var i = 0; i < type.length; i++){
    var element = document.getElementById(type[i]);
    if(element.id != idIn){
      document.getElementById(element.id).style.backgroundColor = "white";
    }
  }  
}
var lastID = "";
export function buttons(){
  document.getElementById("0915button").addEventListener("click", show.bind("click", "0915"));
  document.getElementById("0929button").addEventListener("click", show.bind("click", "0929"));
  document.getElementById("1013button").addEventListener("click", show.bind("click", "1013"));
  document.getElementById("1025button").addEventListener("click", show.bind("click", "1025"));
  document.getElementById("1119button").addEventListener("click", show.bind("click", "1119"));
  document.getElementById("1218button").addEventListener("click", show.bind("click", "1218"));
}
export function show(idIn){
  if(lastID != ""){
    document.getElementById(lastID).style.visibility = "hidden";
  }
  document.getElementById(idIn).style.visibility = "visible";
  lastID = idIn;
  
}

export function changeName(){
  if(document.getElementById("age_select").checked){
    // document.getElementById("class_select").checked = false;
    document.getElementById("teddy").innerHTML = "2.5 to 3 years old";
    document.getElementById("bear").innerHTML = "3 to 4 years old";
    document.getElementById("big_bears").innerHTML = "4 to 5 year old";
  }
  else {
    // document.getElementById("age_select").checked = false;
    document.getElementById("teddy").innerHTML = "Teddy/Panda Bears";
    document.getElementById("bear").innerHTML = "Bear Cubs";
    document.getElementById("big_bears").innerHTML = "Big/Sun Bears";
  }
}