let arr = {
    hero: ["LIFE_STEALER", "SVEN", "WRAITH_KING", "CLINKZ", "FACELESS_VOID", "SLARK", "SPECTRE", "TROLL_WARLORD", "ANTI-MAGE", "JUGGERNAUT"],
    сounterpick: ["TROLL_WARLORD", "LUNA", "SHADOW_FIEND",
        "RIKI", "ANTI-MAGE", "RAZOR",
        "PHANTOM_LANCER", "MORPHLING", "DOOM",
        "BROODMOTHER", "RUBICK", "ZEUS",
        "LINA", "SPECTRE", "CRYSTAL_MAIDEN",
        "DOOM", "MONKEY_KING", "LUNA",
        "FACELESS_VOID", "HUSKAR", "SHADOW_DEMON",
        "SLARK", "MIRANA", "CLINKZ",
        "STORM_SPIRIT", "MEEPO", "SVEN",
        "LUNA", "FACELESS_VOID", "LINA"],
    answer: [1, 3, 1, 3, 2, 1, 2, 1, 2, 2]
}


function select(el) {
    Return();
    el.style.boxShadow = "0 0 100px rgb(255, 255, 255)";
    for(var i=0; i<document.getElementsByClassName("answer").length; i++){
        if(el == document.getElementsByClassName("answer")[i]) onSelect=i+1;
    }
}

let h = 1;
let c = 3;
let onSelect = 0;
let IdA = 0;
let Count=1;


function Next() {
    if (h != 10) {
        if(onSelect == 0){
             alert("Select answer!");
             return;
        }
        Return();
        document.getElementById("mainPhoto").src = "img/" + arr.hero[h] + ".png";
        h++;
        for (var j = 0; j < 3; j++) {
            document.getElementsByClassName("answer")[j].src = "img/" + arr.сounterpick[c] + ".png";
            c++;
        }
        if(h == 10){
            document.getElementsByClassName("next")[0].innerText="Show result";
        }
        if(onSelect == arr.answer[IdA])Count++;

        IdA++;
        onSelect=0;
    }
    else {
        localStorage.setItem("Count", Count);
        document.getElementsByClassName("next")[0].href="result.html";    
    }
}

function Return(){
    var imgs = document.getElementsByClassName("img");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.boxShadow = "";
    }
}


function Load(el){
    var res = localStorage.getItem("Count");    
    el.innerText = "Your result = " + localStorage.getItem("Count") + "0%"; 
    localStorage.setItem("Count", 0);
}