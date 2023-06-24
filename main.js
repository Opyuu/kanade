var crystals = 0;
var roboCount = 0;
var siblingCount = 0;
var perSecond = 0;

function clicked(){
    crystals++; // Increase crystal by 1, or how many you get per click in future
}

function buy_NeneRobo(){
    let roboCost = Math.floor(10 * Math.pow(1.1, roboCount));
    if(crystals >= roboCost){
        roboCount++;
        crystals -= roboCost;
        document.getElementById('RoboCount').innerHTML = roboCount;  // Update number of NeneRobos
    }
    roboCost = Math.floor(10 * Math.pow(1.1, roboCount));
    document.getElementById('RoboCost').innerHTML = roboCost;
}

function buy_sibling(){
    let siblingCost = Math.floor(100 * Math.pow(1.1, siblingCount));
    if (crystals >= siblingCost){
        siblingCount++;
        crystals -= siblingCost;
        document.getElementById('SiblingCount').innerHTML = siblingCount; // Update number of Siblings
    }
    siblingCost = Math.floor(100 * Math.pow(1.1, siblingCount));
    document.getElementById('SiblingCost').innerHTML = siblingCost;
}

function calculate_gain(){ // Updates the number of crystals earned per second
    perSecond = roboCount * 1 + siblingCount * 10;
    document.getElementById("CPS").innerHTML = perSecond.toString();
}

window.requestAnimationFrame(gameLoop);
function gameLoop(){
    calculate_gain();
    crystals += (perSecond / 60);
    document.getElementById("Counter").innerHTML = Math.floor(crystals).toString();
    window.requestAnimationFrame(gameLoop);
}


/* 
IDEA:

have some sort of character item system (similar to in game) as a +% to team talent ---> as rebirth system. Each rebirth gives coins, which will be used to upgrade these items
have some sort of flower collection (similar to in game) as a +% to team talent
    !!! what do we use to upgrade flower, or what
have some sort of gacha aspect where you can use your actual crystals (% of cps) to roll
    -> a team of 5 members, has talent. Talent gives +%!! (Some complex formula)
    -> each member has an ability that boosts something. not card, but member.

ideas for new 'buildings': (aim to at least have 5-10)

NeneRobo, a robot that clicks the main crystal for you!                         [✓]
Sibling(s), a real life creature that will farm crystals for you                [✓]
Miku, the sekai god. Feed your crystals to miku.                                [ ]
    -> unlocks gacha system?                                                    [ ]
Whale, converts real $$$ into crystals                                          [ ]
Macros, uses scripts to automatically farm crystals                             [ ]
SEGA, spawns crystals into your account                                         [ ]
Digitaliser, convert real crystals into in game crystals                        [ ]
Garden(s), grow crystals from plants                                            [ ]
    -> unlocks flower system?                                                   [ ]
--> should plan rebirth here or something                                       [ ]

The Matrix, fuses reality with sekai. Crystals are now real. Anything you do will add to crystal count.




 */