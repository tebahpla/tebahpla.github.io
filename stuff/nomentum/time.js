


var i=0;

function timedCount() {
      var d = new Date();
      var d = new Date(); // for now
      var  n = d.getHours(); // => 9
      var   b   = d.getMinutes();
      i= n+":"+b   ;
      setTimeout("timedCount()", 500);
}

timedCount();

