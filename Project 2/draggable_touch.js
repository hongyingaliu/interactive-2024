var offsetX, offsetY;
var currentImg = null;
var greatestIndex = 10;

// Function to handle touch start event
function touchStart(event) {
    currentImg = event.targetTouches[0].target;
    // Calculate the offset between touch position and element position
    offsetX = event.targetTouches[0].pageX - currentImg.offsetLeft;
    offsetY = event.targetTouches[0].pageY - currentImg.offsetTop;
}

// Function to handle touch move event
function touchMove(event) {
    if (!currentImg) return;
    // Prevent default touch action to prevent scrolling
    event.preventDefault();
    // Calculate new element position based on touch position and offset
    var newX = event.targetTouches[0].pageX - offsetX;
    var newY = event.targetTouches[0].pageY - offsetY;
    // Set new element position
    currentImg.style.left = newX + 'px';
    currentImg.style.top = newY + 'px';
    currentImg.style.zIndex = greatestIndex + 1;
    greatestIndex++;
}

// Function to handle touch end event
function touchEnd() {
    currentImg = null;
}

// Add touch event listeners to each image
var postits = document.querySelectorAll('img');
postits.forEach(function(img) {
    img.addEventListener('touchstart', touchStart);
    img.addEventListener('touchmove', touchMove);
    img.addEventListener('touchend', touchEnd);
});
