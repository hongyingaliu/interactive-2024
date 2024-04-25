// when the slider changes value...
const slider = document.getElementById('slider');
const slider2 = document.getElementById('slider2');
const slider3 = document.getElementById('slider3');
const circle = document.getElementById('cyan-circle');

document.getElementById("slider").onchange = function() {

    // first get its value and store that in a variable called size.
    var offset = this.value;
    // slider max is 1000
    //if i have 100 i want the the 
    const newPosition = ((offset / 100 * (slider.offsetWidth - 300)) / slider.offsetWidth) * 100;
    circle.style.left = newPosition + '%';
  }

document.getElementById("slider2").onchange = function() {
    // first get its value and store that in a variable called size.
    var offset = this.value;
    // slider max is 1000
    //if i have 100 i want the the 
    const newPosition = ((offset / 100 * (slider2.offsetWidth - 300)) / slider2.offsetWidth) * 100;
    document.getElementById('yellow-circle').style.left = newPosition + '%';
}
document.getElementById("slider3").onchange = function() {

// first get its value and store that in a variable called size.
var offset = this.value;
    // slider max is 1000
    //if i have 100 i want the the 
    const newPosition = ((offset / 100 * (slider3.offsetWidth - 300)) / slider3.offsetWidth) * 100;
    document.getElementById('magenta-circle').style.left = newPosition + '%';
}