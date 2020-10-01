
 
 //------------------Weather wear----------------------//

 function clothesToWear(temp){
    if (temp == 10 && temp > 5) {
    
        return 'you should be wear jacket ,hat and pants' 
    } else if (temp > 10 && temp < 30) {
    
        return 'you should be wear sport shirt, shor pants and flip flop'
    }
    else if (temp > 30 && temp < 40) {
    
        return 'you should be wear short pants, a shirt and a hat'
    }
    
    }
    
    const clothes = clothesToWear(15);
    console.log(clothes);