
DayName = new Array(7)

DayName[0] = "Niedziela "

DayName[1] = "Poniedziałek "

DayName[2] = "Wtorek "

DayName[3] = "¦roda "

DayName[4] = "czwartek "

DayName[5] = "Pi±tek "

DayName[6] = "Sobota "



MonthName = new Array(12)

MonthName[0] = "stycznia "

MonthName[1] = "lutego "

MonthName[2] = "marca "

MonthName[3] = "kwietnia "

MonthName[4] = "maja "

MonthName[5] = "czerwca "

MonthName[6] = "lipca "

MonthName[7] = "sierpnia "

MonthName[8] = "wrze¶nia "

MonthName[9] = "paĽdziernika "

MonthName[10] = "listopada "

MonthName[11] = "grudnia "


function getDateStr(){

    var Today = new Date()

    var WeekDay = Today.getDay()

    var Month = Today.getMonth()

    var Day = Today.getDate()

   var Year = Today.getYear()

console.log(Year);
   
        Year += 1900
 
    return DayName[WeekDay]  + " " + Day + " " + MonthName[Month]  + Year

}


