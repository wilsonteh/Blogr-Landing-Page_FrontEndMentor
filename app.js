const body = document.body

const menuCheckboxes = body.querySelectorAll(".menu-checkbox");
const subMenus = body.querySelectorAll('.sub-menu');


function callbackParams(callback) {
    callback();
}

// allow only 1 of the menus being checked, 
// so that each time only one set of sub menus is shown
function oneMenuChecked(checkbox) {
    menuCheckboxes.forEach(chkbox => {
        if (chkbox !== checkbox) 
            chkbox.checked = false;
    })
}

// function removeSelectedSubMenus() {

// }

menuCheckboxes.forEach(item => {
    item.addEventListener('change', function callbackParams() {
        oneMenuChecked(this);
    })
})