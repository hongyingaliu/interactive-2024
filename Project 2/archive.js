const images = ["images/2024-4-18.png", "images/2024-4-19.png", 
"images/2024-4-20.png", "images/2024-4-21.png"]
images.push("images/postie-cover.png")
const imageGallery = document.getElementById("image-gallery")

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
    img.style.zIndex = 0;
    img.className = "postie";
    // Append the img element to the div
    imageGallery.appendChild(img);
}

function changeImage() {
    var img = document.getElementById('archive');
    img.src = 'images/archive-hover.png';
}

function restoreImage() {
    var img = document.getElementById('archive');
    img.src = 'images/archive-text.png';
}



