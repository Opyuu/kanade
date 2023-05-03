const members = [
    ["Ichika", "Saki", "Honami", "Shiho"], 
    ["Minori", "Haruka", "Airi", "Shizuku"], 
    ["Kohane", "An", "Akito", "Toya"], 
    ["Tsukasa", "Emu", "Nene", "Rui"], 
    ["Kanade", "Mafuyu", "Ena", "Mizuki"]
]; // [Group][Member]
output = []
var index = 0;

const images = {
    "Ichika": "https://static.wikia.nocookie.net/projectsekai/images/b/b3/Ichika.png/revision/latest/scale-to-width-down/479?cb=20200213203809",
    "Saki": "https://static.wikia.nocookie.net/projectsekai/images/d/d0/Saki.png/revision/latest/scale-to-width-down/581?cb=20200213220133",
    "Honami": "https://static.wikia.nocookie.net/projectsekai/images/4/40/Honami.png/revision/latest/scale-to-width-down/393?cb=20200213220831",
    "Shiho": "https://static.wikia.nocookie.net/projectsekai/images/8/87/Shiho.png/revision/latest/scale-to-width-down/295?cb=20200213220844",
    "Minori": "https://static.wikia.nocookie.net/projectsekai/images/1/1a/Minori.png/revision/latest/scale-to-width-down/466?cb=20200214145314",
    "Haruka": "https://static.wikia.nocookie.net/projectsekai/images/b/b1/Haruka.png/revision/latest/scale-to-width-down/403?cb=20200214152146",
    "Airi": "https://static.wikia.nocookie.net/projectsekai/images/9/96/Airi.png/revision/latest/scale-to-width-down/574?cb=20200214153138",
    "Shizuku": "https://static.wikia.nocookie.net/projectsekai/images/a/ac/Shizuku.png/revision/latest/scale-to-width-down/417?cb=20200214155224",
    "Kohane": "https://static.wikia.nocookie.net/projectsekai/images/b/b4/Kohane.png/revision/latest/scale-to-width-down/386?cb=20200214163613",
    "An": "https://static.wikia.nocookie.net/projectsekai/images/8/8a/An.png/revision/latest/scale-to-width-down/569?cb=20200214165356",
    "Akito": "https://static.wikia.nocookie.net/projectsekai/images/b/b3/Akito.png/revision/latest/scale-to-width-down/452?cb=20200214172356",
    "Toya": "https://static.wikia.nocookie.net/projectsekai/images/e/e9/Toya.png/revision/latest/scale-to-width-down/295?cb=20200214172954",
    "Tsukasa": "https://static.wikia.nocookie.net/projectsekai/images/c/cc/Tsukasa.png/revision/latest/scale-to-width-down/700?cb=20200214183800",
    "Emu": "https://static.wikia.nocookie.net/projectsekai/images/5/5d/Emu.png/revision/latest/scale-to-width-down/700?cb=20200214192237",
    "Nene": "https://static.wikia.nocookie.net/projectsekai/images/5/57/Nene.png/revision/latest/scale-to-width-down/699?cb=20200214194226",
    "Rui": "https://static.wikia.nocookie.net/projectsekai/images/1/1e/Rui.png/revision/latest/scale-to-width-down/688?cb=20200214200747",
    "Kanade": "https://static.wikia.nocookie.net/projectsekai/images/2/2e/Kanade.png/revision/latest/scale-to-width-down/470?cb=20200214210651",
    "Mafuyu": "https://static.wikia.nocookie.net/projectsekai/images/1/16/Mafuyu.png/revision/latest/scale-to-width-down/369?cb=20200214152132",
    "Ena": "https://static.wikia.nocookie.net/projectsekai/images/c/c8/Ena.png/revision/latest/scale-to-width-down/352?cb=20200214213133",
    "Mizuki": "https://static.wikia.nocookie.net/projectsekai/images/9/9c/Mizuki.png/revision/latest/scale-to-width-down/507?cb=20220510134827"
};

for(let group1 = 0; group1 < 5; group1++){
    for (let member1 = 0; member1 < 4; member1++){
        for (let group2 = group1 + 1; group2 < 5; group2++){
            for (let member2 = 0; member2 < 4; member2++){
                if (members[group1][member1] == "Saki" && members[group2][member2] == "Tsukasa"){continue;}
                if (members[group1][member1] == "Shiho" && members[group2][member2] == "Shizuku"){continue;}
                if (members[group1][member1] == "Akito" && members[group2][member2] == "Ena"){continue;}
                output.push(members[group1][member1] + " " + members[group2][member2]);
            }
        }
    }
}

console.log(output);

function next(){
    let ship = output[index];
    list = ship.split(" ");
    document.getElementById("image1").src=images[list[0]];
    document.getElementById("image2").src=images[list[1]];
    document.getElementById("image1label").innerHTML=list[0];
    document.getElementById("image2label").innerHTML=list[1];
    index++;
}