//-------------------------------- Age Dog Calculator-------------------------------//


let dogYearOfBirth, dogYearFuture, shouldShowResultlnDogYear, dogYear;
prompt('calculate the age of you Dog in the future. If you want to continue please press OK','' );
dogYearOfBirth = prompt('Enter your dogs date of birth','' );
dogYearFuture = prompt('Enter the year you want to know your dogs age','' );
dogYear = dogYearFuture  - dogYearOfBirth;
shouldShowResultlnDogYear =  dogYear * 7 ;
document.write("In the year " + dogYearFuture + "  you dog will have " + dogYear + " human years "
+ " and " + shouldShowResultlnDogYear +" dog years " );
console.log("In the year " + dogYearFuture + "  you dog will have " + dogYear + "human years"
+ " and " + shouldShowResultlnDogYear +" dog years ");