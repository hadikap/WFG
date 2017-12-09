window.$=function(p){
  var s='querySelectorAll';
  if(p.indexOf('#')===0) {
    s='getElementById';
    p=p.substr(1,p.length);
  }
  return document[s](p)
}