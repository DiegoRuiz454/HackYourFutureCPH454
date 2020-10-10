

//--------------------spirit_animal------------------------------//


const spirit_adj = ["Hypnotic","Howling","Promiscuous","Melancholic","Feisty","Lame","Beloved","Fluffy","Standard",];

const animal_name = ["Duck","Dog","Cat","Bird","butterfly","Monkey","Dolphine","crab","cow",];


function spirit() {
    escribir = document.getElementById("caja")

    miTitulo = "<h1>" + document.rellenar.titulo.value + "</h1>"
    
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


    escribir.innerHTML = 'You spirit animal Name is' + miTitulo  + Spirit_Animal_Adj + Name_animal
    }
window.onload = function() {
document.rellenar.ver.onclick = spirit
} 