let element = $('.title h2:last');
// Hide the element initially so the first fade-in animation is visible
element.hide();

let texts = ['Healing Holistic Way','Yoga','Mind','Body','Soul','Diet','Homeopathy'];
let currentindex = 0;

function typeText() {
    element.text(texts[currentindex]);
    element.fadeIn(2000);
    setTimeout(eraseText, 2000);
}

function eraseText() {
    element.fadeOut(2000);
    currentindex = (currentindex + 1) % texts.length;
    setTimeout(typeText, 2000);
}

typeText();
