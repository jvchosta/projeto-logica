let heroName = "Oil Man"
let xp = 9875
let classification
if (xp > 10000){
    classification = "Radiante";
}
else if (xp > 9000){
    classification = "Imortal"
}
else if (xp > 8000){
    classification = "Ascendente"
}
else if (xp > 7000){
    classification = "Platina"
}
else if (xp > 6000){
    classification = "Ouro"
}
else if (xp > 5000){
    classification = "Prata"
}
else if (xp > 1000){
    classification = "Bronze"
}
else if (xp < 1000){
    classification = "Ferro"
}
console.log("O herói de nome " + heroName + " está no nível " + classification +", com " + xp + " de xp! ;)")