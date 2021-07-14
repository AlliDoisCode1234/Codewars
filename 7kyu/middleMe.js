function middleMe(N, X, Y){
    //     P: string, string, number
    //     R: string
    //     E: X = 'A';
    
    //         Y = '*';
    
    //         N = 10;
    
    //         Y repeated N times = '**********';
    
    //         X in the middle of Y repeated N times = '*****A*****';
        
    //     P:  Print y, n times in a string
        // middle of string is n divided by 2
        // slice up intil and after and concat x in the middle
      
      let result = Y.repeat(N);
      return N % 2 === 0 ? result.slice(0, N/2) + X + result.slice(N/2, N) : X
    }