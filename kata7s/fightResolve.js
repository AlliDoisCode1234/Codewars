function fightResolve(defender, attacker){
	
    let p1 = ['a', 's', 'p', 'k'];
    let p2 = ['A', 'S', 'P', 'K'];
    let error = -1;
    
    let att = attacker.toLowerCase();
    let def = defender.toLowerCase();
    
    if(p1.includes(defender) && p1.includes(attacker) == true || p2.includes(defender) && p2.includes(attacker) == true){
      return error;
    } else if(att === 'a' && def === 'k' || att === 's' && def === 'a' || att === 'p' && def === 's' || att === 'k' && def === 'p'){
      return defender;
    } else {
      return attacker;
    }
  }
  
  
  
  
    // making boardgame
    // two opposing players
    // 6 x 6 tile system
    // each player taking turns similar to chess
    
    // design is finished, 
    // break down program into smaller sections to manage
    // logic: resolving "fights" when two pieces engage in combat on a tile
    
    // 4 Unique pieces:
    
    // 1 Swordsman
    // 2 Cavalry
    // 3 Archer
    // 4 Pikeman
    
    // 4 Unique Movement, Advantages, & Weaknesses 
    // in combat against each other piece
    
    // TASK ***
    
    // function that takes
    // attacking & defending pieces as input parameters
    // returns the winning piece. 
    // if the attacking & defending piece belong to same player
    // return error indicating illegal move
    
    // player 1 - lowercase lettered pieces (p, k, a, s)
    // player 2 - uppercase lettered pieces (P, K, A, S)
    
    // outcome of fight depends on the attacking piece
    
    // FIGHTS:
    
    // Archers always win against swordsmen
    // Swordsman always win against pikemen
    // Pikemen always win against calvalry
    // Cavalry always win against archers
    
    
     
    
    // if a matchup occurs that was not previously mentioned
    // the attacker ALWAYS wins
    
    // see chart
    
    // if illegal move, return -1
    // otherwise, assume no other illegal values will be passed
    
   
    // STEPS:
    
    // make two separate player pieces
    // array of each value being the player pieces
    // if attacking piece is apart of the other array
    // AND is attacking piece it always loses to
    // return defender
    // else return attacking piece as winner
    // if piece is attacking piece in same array, return error