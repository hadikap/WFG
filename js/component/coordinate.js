
function Coordinate(x,y){
  
  this.x = x || -9999;
  this.y = y || -9999;

  this.set=function(x,y){
    if(x)this.x=x;
    if(y)this.y=y;
  }
}