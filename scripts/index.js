document.addEventListener('DOMContentLoaded', () => {

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

});

function darkModeFunc(){
    var element = document.body;
    if (element.className == "dark-mode") {
        element.className = "light-mode";
    } else {
        element.className = "dark-mode";
    }
}