
DayName = new Array(7)

DayName[0] = "Sunday "

DayName[1] = "Monday "

DayName[2] = "Tuesday "

DayName[3] = "Wednesday "

DayName[4] = "Thursday "

DayName[5] = "Friday "

DayName[6] = "Saturday "



MonthName = new Array(12)

MonthName[0] = "january "

MonthName[1] = "february "

MonthName[2] = "march "

MonthName[3] = "april "

MonthName[4] = "may "

MonthName[5] = "june "

MonthName[6] = "july "

MonthName[7] = "august "

MonthName[8] = "september "

MonthName[9] = "october "

MonthName[10] = "november "

MonthName[11] = "december "


function getDateStr(){

    var Today = new Date()

    var WeekDay = Today.getDay()

    var Month = Today.getMonth()

    var Day = Today.getDate()

   var Year = Today.getYear()



        Year += 1900

    return DayName[WeekDay]  + " " + Day + " " + MonthName[Month]  + Year

}


