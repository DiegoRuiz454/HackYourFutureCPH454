
//------------Create a class called Circle. It should have one property called radius.---------------------

class circle { constructor(radius){this.radius = radius;}
    
    getDiameter() 
    {return 2 * this.radius} ;
    getCircumference ()
    {return 2 * Math.PI * this.radius};
    getArea ()
    {return Math.PI * this.radius * this.radius };
    }

     //--------------this can be running in the server---------------------------

const circle_a = new circle(10);
console.log(circle_a.getDiameter(10)); // 20
console.log(circle_a.getArea(10));// 414.1592653589793
console.log(circle_a.getCircumference(10));//62.83185307179586

const circle_b = new circle(25);
console.log(circle_b.getDiameter(25)); // 50
console.log(circle_b.getArea(25));//1963.4954084936207
console.log(circle_b.getCircumference(25));//157.07963267948966

const circle_c= new circle(35);
console.log(circle_c.getDiameter(35)); // 70
console.log(circle_c.getArea(35));//3848.4510006474966
console.log(circle_c.getCircumference(35));//219.9114857512855




