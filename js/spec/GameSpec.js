describe("Game", function() {
  var game;
  var result;
  var valueTwoOrFour;
  
  beforeEach(function() {
    game = new Game();
  });


  describe ("initialize", function() {

    beforeEach(function() {
      result = [];
      for(var i=0; i < game.state.length; i++){
        if (game.state[i] != null){
          result[result.length] = game.state[i];
        }
      }
    });

    it ("has a game 16 length game state", function(){
      expect(game.state.length).toEqual(16);
    });
    it ("populates two random positions", function(){
      expect(result.length).toEqual(2);
    });
    it ("populates first position with a 2 or 4", function(){
      expect(valueIsTwoOrFour(result[0])).toBe(true);
    });
    it ("populates second position with a 2 or 4", function(){
      expect(valueIsTwoOrFour(result[1])).toBe(true);
    });
  });

});