var crystals = 0;
var roboCount = 0;
var perSecond = 0;

function clicked(){
    crystals++;
}

function buy_NeneRobo(){
    let roboCost = Math.floor(10 * Math.pow(1.1, roboCount));
    if(crystals >= roboCost){
        roboCount ++;
        crystals -= roboCost;
        document.getElementById('RoboCount').innerHTML = roboCount;  //updates the number of nenerobos for the user
        document.getElementById('RoboCost').innerHTML = roboCost;  //updates the number of nenerobos for the user
    }
    roboCost = Math.floor(10 * Math.pow(1.1, roboCount));
    document.getElementById('RoboCost').innerHTML = roboCost;
}

function calculate_gain(){ // Updates the number of crystals earned per second
    perSecond = roboCount * 1;

    return perSecond / 60;
}

window.requestAnimationFrame(gameLoop);
function gameLoop(){
    document.getElementById("Counter").innerHTML = Math.floor(crystals).toString();
    document.getElementById("CPS").innerHTML = perSecond.toString();
    crystals += calculate_gain();
    window.requestAnimationFrame(gameLoop);
}