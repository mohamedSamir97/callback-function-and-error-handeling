var rect = require('./rectangle')
function solveRect(l,b){
    console.log("solving for rectangle with l = "+l+" and b = "+b);
    rect(l,b, (err,rectangle)=> {
        if (err){
            console.log("error: ", err.message)
        }
        else{
            console.log("The area of the rectangle of dimension l = "+l+" and b = "+b+" is"+rectangle.area())
            console.log("The perimeter of the rectangle of dimension l = "+l+" and b = "+b+" is"+rectangle.perimeter())
        }

    });
    console.log ("This statement is after the call to rect()")

    
}
solveRect(2,4);
solveRect(3,5);
solveRect(2,6);
solveRect(6,7);
solveRect(-1,-6);
    
    