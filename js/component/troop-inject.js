
function TroopInject(rate,house){
  
  this.rate = rate || 1; // number per second
  this.house = house || null;

  this.previousCreation = 0;
  this.ready = false;

  this.set=function(rate,house){
    if(rate)this.rate = rate;
    if(house)this.house = house;
  }

  this.injectTroop=function(){
    if(ready){
      // can create
    }else{
      this.checkTime();
      // check time
      // if 
    }
    // not set
    // return
  }

  this.checkTime=function(){

  }

}