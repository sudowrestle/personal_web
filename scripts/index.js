document.addEventListener('DOMContentLoaded', () => {

    let currYearNow = new Date().getFullYear();

    const whoamiDivElements = document.querySelectorAll('.whoami-fade');
    let current = 0;


    // adjust whoami display effects here
    function rotateWhoami() {
        whoamiDivElements.forEach((div, index) => {
            if (index === current) {
                div.classList.add('visible');
            } else {
                div.classList.remove('visible');
            }
        });

        current = (current + 1) % whoamiDivElements.length;
    }
    setInterval(rotateWhoami, 4 * 1000);
    rotateWhoami();

    gameBoot("WARCRAFT");

    // fills footer text
    document.querySelector("#footer h3").innerHTML="&#169 Anthony Elia " + currYearNow;

});

function darkModeFunc(){
    var element = document.body;
    if (element.className == "dark-mode") {
        element.className = "light-mode";
    } else {
        element.className = "dark-mode";
    }
}

function gameBoot(name){
    Dos(document.getElementById("dos"), {
        url: "assets/dosGames/" + name + ".jsdos",
    });
};

function turnOffPC(){
    let dosPCState = document.getElementById("pc-onoff-button");
    let dosPC = document.getElementById("dos");
    
    if (dosPCState.innerText == "Turn off PC") {
        dosPCState.innerText = "Turn on PC";
        Dos(document.getElementById("dos")).stop();
    } else if (dosPCState.innerText == "Turn on PC") {
        dosPCState.innerText = "Turn off PC";
        dosPC.style.display = "block";
        gameBoot("DOOM");  
    }
    
}