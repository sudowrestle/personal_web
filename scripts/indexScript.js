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

    
    const parentItems = document.querySelectorAll('.sidebar-parent');

    parentItems.forEach(item => {
        item.addEventListener('click', function() {
            const childList = this.querySelector('.sidebar-child');
            if (childList) {
                childList.style.display = (childList.style.display === 'block') ? 'none' : 'block';
            }
        });
    });
});

function darkModeFunc(){
    var element = document.body;
    if (element.className == "dark-mode") {
        element.className = "light-mode";
    } else {
        element.className = "dark-mode";
    }
}