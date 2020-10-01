

//--------------------Event application----------------------------

var daysWeek=['Monday','Tueday','Wednesday','Thursday','Friday','Saturday','sunday'];
   
   function getEventWeekday(event){
   const date = new Date().getDay();
   var dayEvent = daysWeek[date];
   var answer = daysWeek[6] ;
   var num = 4;
   return 'Today is ' + ' ' + dayEvent + ' ' + 'and the event will be in ' +  num +
   ' days. Therefore the event will be held on a ' + answer;

   
    }
   
  console.log(getEventWeekday(event)); 