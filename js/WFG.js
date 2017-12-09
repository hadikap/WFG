// doc
// canvas : main canvas element of game
// ctx : main render window of game

function WFG(){
    // implemention
    // properties
    this.canvas=document.createElement("canvas");
    
    // methods
    
  
    // Initialize WFG game environment
    this.__init=function() {

      // add id to canvas element
      this.canvas.id = "WFG";
      // set view full size of screen
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.ctx = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);

      // create houses
      
    }
  
    this.test=function() {
      // set view full size of screen
      this.ctx.canvas.width  = window.innerWidth;
      this.ctx.canvas.height = window.innerHeight;
  
      // status bar
      this.ctx.font='1rem sans-serif';
      this.ctx.fillText("status bar",10,this.canvas.height-10);
  
      // draw codes
      this.ctx.fillStyle = "#FF0000";
      this.ctx.fillRect(0,0,100,100);
  
      this.ctx.fillStyle = "#00ff00";
      this.ctx.fillRect(100,100,100,100);
      this.ctx.moveTo(0,0);
      this.ctx.lineTo(200,100);
      this.ctx.moveTo(1,0);
      this.ctx.lineTo(201,100);
      this.ctx.moveTo(2,0);
      this.ctx.lineTo(202,100);
      this.ctx.moveTo(3,0);
      this.ctx.lineTo(203,100);
      this.ctx.stroke();
  
      this.ctx.beginPath();
      this.ctx.arc(95,50,40,0,2*Math.PI);
      this.ctx.stroke();
    }
  
    // initialization
  
    this.__init();
  }