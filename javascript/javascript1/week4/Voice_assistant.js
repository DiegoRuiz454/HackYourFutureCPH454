

//-------------------Voice_assistant--------------------//

if (annyang) {
    
    var voices;  // this variable is to store all voices

    var utter =  new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = 'en-US'; //language

    
    //We load the voices that we have in our system and show them in an arrangement per console.
    window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
    };

    // this is to define a command that recognize the voice.
    var commands = {
        'Hello my name is diego': function () {
            utter.text = 'Nice to meet you diego';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'What is my name': function () {
            utter.text = 'You name is diego';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'fishing': function (){
            todos = ['fishing added'];
            utter.text = todos [0];
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        //-------------add singing in the shower to the list todos-----------------
        'singing in the shower': function () {
            todos = ['fishing added' ];
            todos.unshift ('singing in the shower added'); 
            utter.text = todos[0];
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);   
        },

        //-------------remove fishing from the array todos------------------
        'Remove fishing': function () {
            todos = ['fishing added','singin in the shower'];
            todos.shift();
            utter.text = 'Removed fishing from your todo';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter); 
           
            
        },

        'What is on': function () {
            todos = ['you have two todos'+'fishing and singing in the shower'];
            utter.text = todos;
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        //----------------voice calendar--------------------------

        'What day is today': function () {
            monthYear = ['january','february','march','april','may','june','july','august','september','november','december']
            var day = new Date ().getDate();
            var month = new Date().getMonth();
            var year = new Date().getFullYear();
            month = monthYear[month];
            utter.text = day+month+year;
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        //---------------Voice Calculator---------------------------
            
        'what is three + three': function () {
            numbers = ['one','two','three','four','five','six','seven','eight','nine','ten']
            utter.text = numbers[5];
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        'what is four times four': function () {
            numbers2 = ['forty one','forty two','forty three','forty four','forty five','forty six','forty seven','forty eight','forty nine']
            utter.text = numbers2[7];
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
         
         
        
    }

    //This helps us to see who hears the program in real time.
    
    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
       });
       
  
    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening.
    annyang.start({autoRestart:false, continuous:true});
    }

    //---------------set a timer--------------

   let commandVoice = 0;

   if(commandVoice == "Set a timer for 4 minutes") {
   let startMinutes = 4;
   let time = startMinutes * 60;

   const countDown = document.getElementById('Timer');


   setInterval(updateCountDown, 1000);

   function updateCountDown() {
     let minutes = Math.floor(time/60);
     let secound = time % 60;

     countDown.innerHTML = `${minutes}: ${secound}`;

    time--;
    return  'Timer set for 4 minutes';


   }}
   console.log(updateCountDown);