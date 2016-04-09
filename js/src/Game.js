var Game = function(){
  this.state = [null, null, null, null,
                null, null, null, null,
                null, null, null, null,
                null, null, null, null];
  this.initialize();
};

Game.prototype.initialize = function(){
  this.state[this.randomOpenPosition()] = this.randomBlock();
  this.state[this.randomOpenPosition()] = this.randomBlock();
};

Game.prototype.randomBlock = function(){
  return Math.pow(2, Math.round(Math.random())+1);
};

Game.prototype.openIndexs = function(){
  var rtn = [];
  for(var i=0; i<this.state.length; i++){
    if(this.state[i] == null){
      rtn[rtn.length] = i;
    }
  }
  return rtn;
};

Game.prototype.randomOpenPosition = function(){
  var openSpaces = this.openIndexs();
  var random = Math.floor(Math.random()*openSpaces.length);
  return openSpaces[random];
};

Game.prototype.left = function(){
  var alteredRows = [];
  for(var i=0; i<4; i++){ 
  // this should be grabbing the four rows
    
    for(var j=0; j<4; j++){

    }
  }
};

Game.prototype.grabRow = function(rowI) {

};

Game.prototype.grabCol = function(colI) {

};

Game.prototype.right = function(){
};

Game.prototype.up = function(){
};

Game.prototype.down = function(){
};

Game.prototype.columns = function(){
};

Game.prototype.row = function(){
};