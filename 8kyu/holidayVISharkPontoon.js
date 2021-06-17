function shark(p, sd, you, ss, dolphin){
    // how far the shark is from the pontoon
    // how fast the shark swims
    // how fast you swim meters/second
    // how far to swim to safety
    // if dolphin is true, you can half the swimming speed of the shark
    // the pontoon, you, and the shark are align in one dimension
    
    // if you make it, return "Alive", else "Shark Bait"
    
    
    if(dolphin){
      ss /= 2;
    }
    return p/you< sd/ss ? "Alive!" : "Shark Bait!";
    
  }