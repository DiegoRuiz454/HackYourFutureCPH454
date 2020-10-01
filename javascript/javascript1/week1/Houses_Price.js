//price houses

let wide, deep, high, gardenZise, housePrinceFormulaA, housePrinceFormulaA1, housePrinceFormulaB, housePrinceFormulaC;
// constants of the formula
const a = 2.5, b = 1000, c = 300 ;  

//house size variables
prompt('calculate the price of your house, press ok to continue','' );
wide = prompt('Enter the width you want','' );
deep = prompt('Enter the deep you want','' );
high = prompt('Enter the high you want','' );
gardenZise = prompt('Enter the garden Zise you want','' );

// house price formula
housePrinceFormulaA = wide * deep * high ; 
housePrinceFormulaA1= housePrinceFormulaA * a * b;
housePrinceFormulaB = gardenZise * c ;
housePrinceFormulaC = housePrinceFormulaA + housePrinceFormulaB + housePrinceFormulaA1;



document.write("the price house is " + housePrinceFormulaC  );
console.log("the price house is " + housePrinceFormulaC );