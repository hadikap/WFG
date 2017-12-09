
function Collide(radius,type,roatation){
  
  this.radius = radius || 1;
  this.type = this[(type || 'circle')];
  this.roatation = roatation || 0;

  this.set=function(options){
    if(options.radius)this.radius = options.radius;
    if(options.type)this.type = this[options.type];
    if(options.roatation)this.roatation = options.roatation;
  }

  Collide.collideCheck=function(C1,C2){
    // not set
    // return
  }

}