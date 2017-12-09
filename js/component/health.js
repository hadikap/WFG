


function Health(healthSize,healthRegeneration){
  
  this.healthSize = healthSize || 1;
  this.healthRegeneration = healthRegeneration || 0;

  this.set=function(options){
    if(options.healthSize)this.healthSize=options.healthSize;
    if(options.healthRegeneration)this.healthSize=options.healthRegeneration;
  }

  this.regenerate=function(){
    // not set
    // return
  }

}