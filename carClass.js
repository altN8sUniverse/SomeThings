var Car = function(type, model, name){
  this.type = type;
  this.model = model;
  this.name = name;
  
  var numOfDoors = 4;
  var numOfWheels = 4;
  var drive = 5;
  
  if(name ===" "){
    name = "General";
    model = "GM";
  }
  
  else if(type === "isSaloon" && ((model = "Porshe" && name === "911 Turbo") || (model === "Koenigsegg" && name==="Agera R" ))){
    numOfDoors = 2;
    var speed = "250";
  }
  else if(type !== "isSaloon"){
    type = "trailer";
    numOfWheels = 8;
    speed = 0;
    drive = 7;
  }
  return drive;
  
}
