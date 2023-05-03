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
    "Ichika": "Ichika.webp",
    "Saki": "Saki.webp",
    "Honami": "Honami.webp",
    "Shiho": "Shiho.webp",
    "Minori": "Minori.webp",
    "Haruka": "Haruka.webp",
    "Airi": "Airi.webp",
    "Shizuku": "Shizuku.webp",
    "Kohane": "Kohane.webp",
    "An": "An.webp",
    "Akito": "Akito.webp",
    "Toya": "Toya.webp",
    "Tsukasa": "Tsukasa.webp",
    "Emu": "Emu.webp",
    "Nene": "Nene.webp",
    "Rui": "Rui.webp",
    "Kanade": "Kanade.webp",
    "Mafuyu": "Mafuyu.webp",
    "Ena": "Ena.webp",
    "Mizuki": "Mizuki.webp"
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
    document.getElementById("count").innerHTML="Count: " + (index+1).toString();
    index++;
}