function drive(drinks, finished, drive_time) {
    let units = Math.round(drinks.reduce((a,b)=>a+(b[0]*b[1]/1000),0)*100)/100
   let time1 = finished.split`:`[0]*60*60*1000+finished.split`:`[1]*60*1000
   let time2 = drive_time.split`:`[0]*60*60*1000+drive_time.split`:`[1]*60*1000
   if (time2<time1){
     time2+=(24)*60*60*1000
   }
   time1+=(units.toString().split`.`[0]*60*60*1000+(units.toString().split`.`[1]||0)*0.6*60*1000)
   return [units,time1<time2]
 }