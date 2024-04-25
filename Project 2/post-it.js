// var isDragging = false;
var offsetX, offsetY;
var img = document.getElementById("post-of-the-day");

// Function to handle mouse down event
function dragStart(event) {
    // Calculate the offset between mouse position and element position
    offsetX = event.clientX - img.offsetLeft;
    offsetY = event.clientY - img.offsetTop;

    // Attach event listeners for mouse move and mouse up events
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
}

// Function to handle mouse move event
function dragMove(event) {
    // Calculate new element position based on mouse position and offset
    var newX = event.clientX - offsetX;
    var newY = event.clientY - offsetY;

    // Set new element position
    img.style.left = newX + 'px';
    img.style.top = newY + 'px';
}

// Function to handle mouse up event
function dragEnd() {
    // Remove event listeners for mouse move and mouse up events
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
}

img.addEventListener('mousedown', dragStart);