
// const imageGallery = document.getElementById("image-gallery");
var offsetX, offsetY;
var currentImg = null;
var greatestIndex = 10;
// Function to handle mouse down event
function dragStart(event) {
    currentImg = event.target;
    // Calculate the offset between mouse position and element position
    offsetX = event.clientX - currentImg.offsetLeft;
    offsetY = event.clientY - currentImg.offsetTop;
    // console.log(offsetX);
    // console.log("start");

    // Attach event listeners for mouse move and mouse up events
    // document.addEventListener('mousemove', function(event){
    //     dragMove(event, offsetX, offsetY);
    // });
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
}

// Function to handle mouse move event
function dragMove(event) {
    if (!currentImg) return;
    // Calculate new element position based on mouse position and offset
    var newX = event.clientX - offsetX;
    var newY = event.clientY - offsetY;
    console.log(newX);
    // Set new element position
    currentImg.style.left = newX + 'px';
    currentImg.style.top = newY + 'px';
    currentImg.style.zIndex = greatestIndex + 1;
    greatestIndex++;
}

// Function to handle mouse up event
function dragEnd() {
    // Remove event listeners for mouse move and mouse up events
    console.log("ended");
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
    currentImg = null;
}

var postits = imageGallery.querySelectorAll('img');
postits.forEach(function(img){
    img.addEventListener('mousedown', dragStart);
});