
//------------------Item array removal----------------------------//


   const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
   const nameToRemove = 'Ahmad';
   
  // Write some code here
   names.splice(1, 1); // with this function the item 'Ahmad' is deleted.
  
   for ( var i = 0 ; i < names.length; i ++){
       console.log(names[i]);
   }
  
  // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']