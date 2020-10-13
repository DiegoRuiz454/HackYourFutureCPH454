
//------------------Spirit_animal---------------------------------------//



const spirit_adj = ["Hypnotic","Howling","Promiscuous","Melancholic","Feisty","Lame","Beloved","Fluffy","Standard",];

const animal_name = ["Duck","Dog","Cat","Bird","butterfly","Monkey","Dolphine","crab","cow",];


function spirit() {
    write = document.getElementById("box")

    mytitle = "<h1>" + document.fill.title.value + "</h1>"
    
    Spirit_Animal_Adj = ` the ${
        spirit_adj[
          Math.floor(Math.random() * spirit_adj.length)
        ]
      } ${spirit_adj[Math.floor(Math.random() * spirit_adj.length)]}`;

      Name_animal = `${
        animal_name[
          Math.floor(Math.random() * animal_name.length)
        ]
      } ${animal_name[Math.floor(Math.random() * animal_name.length)]}`;


    write.innerHTML = 'You spirit animal Name is' + mytitle  + Spirit_Animal_Adj + Name_animal
    }
window.onload = function() {
document.fill.ver.onclick = spirit
} 

