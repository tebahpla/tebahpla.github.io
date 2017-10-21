
var i = 0;

function timedCount() {
   var d = new Date();
    var d = new Date(); // for now
n = d.getHours(); // => 9
b = d.getMinutes();
 i= n+":"+b   ;
postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();

