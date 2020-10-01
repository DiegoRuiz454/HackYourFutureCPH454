
//-------------------------------- Age Calculator-------------------------------//

let yearOfBirth;
let yearFuture; 
let date;
prompt('Welcome to the software that can calculate your future age. If you want to continue please press OK','' );
yearOfBirth = prompt('Enter you date of birth','' );
yearFuture = prompt('Enter the year you want to know your age','' );
date = yearFuture - yearOfBirth;
document.write("In the year " + yearFuture + "  you will have " + date + " years");

