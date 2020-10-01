

//------------------Flight booking fullname function------------------//

function getFullname (firstname,surname,useFormalName){

    if (useFormalName){
       return 'Lord' + ' ' + firstname + ' ' +surname;
    }

    return firstname + ' ' +surname;

}

let fullname1= getFullname ('Benjamin','Hugues',false);
let fullname2= getFullname ('Benjamin','Hugues',true);

console.log (fullname1);
console.log(fullname2);