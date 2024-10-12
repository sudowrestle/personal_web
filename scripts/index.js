document.addEventListener('DOMContentLoaded', () => {

    let currYearNow = new Date().getFullYear();  
    
    let initialBoot = true;

    // adjust whoami display effects here
    const whoamiDivElements = document.querySelectorAll('.whoami-fade');
    let current = 0;
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
    setInterval(rotateWhoami, 3 * 1000);
    rotateWhoami();


    // when pc is not in view shut it off, frees up browser resources and prevents users from wondering where noises are coming from
    const dosView = document.getElementById("dos")
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // document.getElementById("pc-onoff-button").innerText = "Turn on PC";
                Dos(document.getElementById("dos")).stop();
            } else {
                // document.getElementById("pc-onoff-button").innerText = "Turn off PC";
                dosView.style.display = "block";
                if (initialBoot){
                    gameBoot("DOOM")
                    initialBoot = false;
                } else{
                gameBoot("DOOM");  
                }
            }
        });
    });

    observer.observe(dosView);
    

    // fills footer text
    document.querySelector("#footer h3").innerHTML="&#169 Anthony Elia " + currYearNow;
    document.querySelector("#alt-footer h1").innerHTML="&#169 Anthony Elia " + currYearNow;

});

function darkModeFunc(){
    var element = document.body;
    var buttonElement = document.getElementById("dark-mode-button")
    if (element.className == "dark-mode") {
        element.className = "light-mode";
        buttonElement.innerText = "Dark mode"

    } else {
        element.className = "dark-mode";
        buttonElement.innerText = "Light mode"
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