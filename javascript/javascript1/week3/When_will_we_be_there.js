
//------------------When will we be there??----------------------------//


 function travelInformation( ) {
    
    let distance = prompt('Enter the distance in km from you destination ');
    
    let speed = prompt('Enter the speed you want for you trip in km/h');

   
    // physical formula to obtain the time

    let time = distance / speed ;

    var x = time;
    // method to obtain the integer part and decimal part of a floating number
    int_part = Math.trunc(x);

    float_part = Number((x - int_part).toFixed(2));

    return ' you will arrive to you destination in' + ' ' + int_part + ' '+ ' hours'+ ' '+ ' and '+ float_part + ' minutes ';
   
    }
    console.log (travelInformation( ));
 