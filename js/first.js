let button = document.getElementById('button');

function clickOnButton() {
    if(!button) {
        console.log('error button');
    } else {
        console.log('button clicked'); 
        alert("You've clicked the button");
    }
}