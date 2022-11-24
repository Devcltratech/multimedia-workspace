
document.onkeydown = function(e) {
    if(e.keyCode == 'M'.charCodeAt(0)){
    return enableMute();
    }
    if(e.keyCode == 'N'.charCodeAt(0)){
    return disableMute();
    }
    if(e.keyCode == 'B'.charCodeAt(0)){
    return checkMute();
    }
    }


var vid = document.getElementById("FunVid");

function enableMute() { 
  vid.muted = true;
} 

function disableMute() { 
  vid.muted = false;
} 

function checkMute() { 
  alert(vid.muted);
}