
   //------------------Series duration of my life----------------------------//

   const seriesDurations = [
    {
      title: 'The fresh prince of Bel-Air',
      days: 7,
      hours: 12,
      minutes: 29,  
    },
    {
      title: 'The Witcher',
      days: 4,
      hours: 20,
      minutes: 29,
    },
    {
      title: 'Vikings',
      days: 9,
      hours: 6,
      minutes: 25,
    }
  ]
  
  function logOutSeriesText() {
    // write code here
  const myAge = 33;
  var totalPercentageFinal = 0;
  
  let serie1, convertMinToHour, convertHourToDays1, convertHourToDays2, totalDays, convertDaysToMonths, convertMonthToYears, percentageSerie1,
  serie2, convertMinToHour1, convertHourToDays3, convertHourToDays4, totalDays1, convertDaysToMonths1, convertMonthToYears1, percentageSerie2,
  serie3, convertMinToHour2, convertHourToDays5, convertHourToDays6, totalDays2, convertDaysToMonths2, convertMonthToYears2, percentageSerie3;
  
  // calculation of the percentage of the serie The fresh prince of Bel-Air

  serie1 = seriesDurations[0].title;

 // converting minutes to hours, hours to days, days to months, months to years.

  convertMinToHour = seriesDurations[0].minutes / 60;

  convertHourToDays1 = convertMinToHour / 24;

  convertHourToDays2 = seriesDurations[0].hours / 24;

  totalDays = seriesDurations[0].days + convertHourToDays1 + convertHourToDays2;

  convertDaysToMonths = totalDays / 30;

  convertMonthToYears = convertDaysToMonths / 12;

  percentageSerie1 = (100 * convertMonthToYears) / myAge;

  // total time first serie took of my life

  percentageSerie1 = percentageSerie1.toFixed(3);

  
  // calculation of the percentage of the serie The witcher

  serie2 = seriesDurations[1].title;

 // converting minutes to hours, hours to days, days to months, months to years.

  convertMinToHour1 = seriesDurations[1].minutes / 60;

  convertHourToDays3 = convertMinToHour1 / 24;

  convertHourToDays4 = seriesDurations[1].hours / 24;

  totalDays1 = seriesDurations[1].days + convertHourToDays3 + convertHourToDays4;

  convertDaysToMonths1 = totalDays1 / 30;

  convertMonthToYears1 = convertDaysToMonths1 / 12;

  percentageSerie2 = (100 * convertMonthToYears) / myAge;

  // total time first serie took of my life

  percentageSerie2 = percentageSerie2.toFixed(3);

  
  // calculation of the percentage of the serie Vikings

  serie3 = seriesDurations[2].title;

 // converting minutes to hours, hours to days, days to months, months to years.

  convertMinToHour2 = seriesDurations[2].minutes / 60;

  convertHourToDays5 = convertMinToHour2 / 24;

  convertHourToDays6 = seriesDurations[2].hours / 24;

  totalDays2 = seriesDurations[2].days + convertHourToDays5 + convertHourToDays6;

  convertDaysToMonths2 = totalDays2 / 30;

  convertMonthToYears2 = convertDaysToMonths2 / 12;

  percentageSerie3 = (100 * convertMonthToYears) / myAge;

  // total time first serie took of my life

  percentageSerie3 = percentageSerie3.toFixed(3);

  totalPercentageFinal = percentageSerie1 + percentageSerie2 + percentageSerie3;

  return  serie1 + ' took ' + percentageSerie1 + ' % ' + ' of my life ' + 
          serie2 + ' took ' + percentageSerie2 + ' % ' + ' of my life ' +
         serie3 + ' took ' + percentageSerie3 + ' % ' + ' of my life ' +' in total that is ' + totalPercentageFinal
          + ' % ' + ' of my life ' ;
         

  }
  
  console.log( logOutSeriesText()); // logs out the text found above