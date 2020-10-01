 // ---------Student manager--------------------

 const class07Students = [];
 function addStudentToClass(studentName) {
     // You write code here
 
   if(class07Students.length > 6){
       console.log('Cannot add more students to class 07' );
     }
     else
         if(class07Students.includes(studentName)){
         console.log('student '+ studentName + 'Already exist in the class');
     } 
     else{
       class07Students.push(studentName);
     }
   }
 
 addStudentToClass("Pedro");
 addStudentToClass("Juan");
 addStudentToClass("Lina");
 addStudentToClass("Gloria");
 addStudentToClass("Felix");
 addStudentToClass("Margarita");
 addStudentToClass("Pablo");

 
 function getNumberOfStudents() {
     // You write code here.
     return class07Students.length;
 }

 
 console.log (class07Students);