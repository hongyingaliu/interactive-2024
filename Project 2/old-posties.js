const imageGallery = document.getElementById("image-gallery")
const permStartDate = new Date('2024-04-21'); // Example start date
images = generateImageList(permStartDate);

// assuming everything is within the year
for (var i = 0; i < images.length; i++) {
    var img = document.createElement('img');

    // Set the source attribute to the image URL
    img.src = images[i]; // replace 'path_to_your_image.jpg' with the path to your image
    console.log(images[i])
    // Optionally, you can set other attributes like alt text, width, height, etc.
    img.alt = 'gallery image';
    // img.width = 400; // Adjust width as needed
    // img.height = 500; // Adjust height as needed
    img.draggable = "false";
    img.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
    var rotationDegree = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10);
    img.style.transform = 'rotate(' + rotationDegree + 'deg)'; 
    img.style.zIndex = 1;
    console.log(images[i].startsWith("IMG"));
    if (images[i].startsWith("images/IM")) {
        img.className = "photo";
    } else {
        img.className = "postie";
    }
    
    // Append the img element to the div
    imageGallery.appendChild(img);
}

function changeback() {
    var img = document.getElementById('return');
    img.src = 'images/return-hover.png';
}

function restoreback() {
    var img = document.getElementById('return');
    img.src = 'images/return.png';
}