export function main() {

  document.getElementById("teddy").addEventListener("click", printy.bind("click", "teddy"));
  document.getElementById("bear").addEventListener("click", printy.bind("click", "bear"));
  document.getElementById("big_bears").addEventListener("click", printy.bind("click", "big_bears"));

}

export function printy(classname){
  var idname; 
  var hasTwoTimes = true;
  var secondClass = "";
  changeStyleClick("", ["am", "pm"]);
  clear();
  if(classname == "teddy"){
    idname = "teddylink";
    secondClass = "pandalink";
    hasTwoTimes = true;  
  }
  if(classname == "bear"){
    idname = "bearlink";
    hasTwoTimes = false;  

  }
  if(classname == "big_bears"){
    idname = "biglink";
    secondClass = "sunlink";
    hasTwoTimes = true;
  }
  if(hasTwoTimes){
    document.getElementById("ampm").classList = "show";
    document.getElementById("am").addEventListener("click", ()=>{
      changeStyleClick("am", ["am", "pm"]);
      clear();
      document.getElementById("ampm").classList = "show";
      document.getElementById(idname).classList = "show";
    });
    document.getElementById("pm").addEventListener("click", ()=>{
      changeStyleClick("pm", ["am", "pm"]);
      clear();
      document.getElementById("ampm").classList = "show";
      document.getElementById(secondClass).classList = "show";

    });
    
  }
  else{
    document.getElementById(idname).classList = "show";
  }
  changeStyleClick(classname, ["teddy", "bear", "big_bears"]);

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