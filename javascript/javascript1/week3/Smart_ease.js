

//------------------Smart-ease----------------------------//

//------------------1 step----------------------------------//
const notes = [];

function saveNote(content, id) {
  // write some code here
  notes.push("pick up groceries","Do laundry");
}

saveNote(1,2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]


//-------------------2 step-------------------------------//
const notes = ['Do laundry','Pick up groceries'];

function getNote(id) {
    // your code here

    for ( var i = 1 ; i < notes.length; i ++){
        console.log(notes[i]);

  }
 }
   const firstNote = getNote(); // {content: 'Pick up groceries', id: 1}


 
//-------------------3 step-------------------------------//


const notes = ['Do laundry','Pick up groceries'];

function logOutNotesFormatted() {
    

    for ( var i = 0 ; i < notes.length; i ++){
        console.log(notes[i]);

  }
 }
      logOutNotesFormatted(); 
