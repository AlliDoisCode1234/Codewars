function getDrinkByProfession(param){
    if(param.toLowerCase() === 'jabroni'){
      return 'Patron Tequila';
    } else if(param.toLowerCase() === 'school counselor'){
      return 'Anything with Alcohol';
    } else if(param.toLowerCase() === 'programmer'){
      return 'Hipster Craft Beer';
    } else if(param.toLowerCase() === 'bike gang member'){
      return 'Moonshine';
    } else if(param.toLowerCase() === 'politician'){
      return 'Your tax dollars';
    } else if(param.toLowerCase() === 'rapper'){
      return 'Cristal';
    } else {
      return 'Beer'
    }
   }




// function getDrinkByProfession(param) {
//     param = param.toLowerCase();
    
//     switch(param) {
//       case "jabroni": return "Patron Tequila";
//       case "school counselor": return "Anything with Alcohol";
//       case "programmer": return "Hipster Craft Beer";
//       case "bike gang member": return "Moonshine";
//       case "politician": return "Your tax dollars";
//       case "rapper": return "Cristal";
//       default: return "Beer";
//     }
//   }