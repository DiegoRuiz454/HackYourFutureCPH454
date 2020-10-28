
//------------Create a class called Circle. It should have one property called radius.---------------------

class circle { constructor(radius)

       {  this.radius = radius;}
  //----------------get diameter----------------------
     getDiameter() 
    {
        return 2 * this.radius
        
    };
    
  //---------------get circumference-------------------

    getCircumference ()
    {
        return 2 * Math.PI * this.radius;
    };
  //--------------- get Area ---------------------------

     getArea ()
     {
         return Math.PI * this.radius * this.radius ;
     };}

     //--------------this can be running in the server---------------------------

const circle_a = new circle(10);
console.log(circle_a.getDiameter()); // 20

const circle_b = new circle(25);
console.log(circle_b.getArea()); //1963.4954084936207

const circle_c= new circle(49);
console.log(circle_c.getCircumference(30)); //307.8760800517997




