var rect = require('./rectangle')
function solveRect(l,b){
    console.log("solving for rectangle with l = "+l+" and b = "+b);
    if (l<= 0 || b<=0){
        console.log ("rectangle dimensions should be greater than 0  l = "+l+ ", b = "+b);
    
    

    }
    else{
        console.log("area of the rectangle is"+rect.area(l,b));
        console.log ("perimeter of the rectanlee is "+rect.perimeter(l,b));

    }
    
}
solveRect(2,4);
solveRect(3,5);
solveRect(2,6);
solveRect(6,7);
solveRect(-1,-6);
    
    