// const images = ["images/2024-4-18.png", "images/2024-4-19.png", 
// "images/2024-4-20.png", "images/2024-4-21.png"]
images.push("images/postie-cover.png")
images.splice(3, 0, "images/IMG_1837.jpg")
images.splice(5, 0, "images/IMG_4242.jpg")
images.splice(0, 0, "images/IMG_6865.jpg")
images.splice(3, 0, "images/IMG_1336.jpg")

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

function changeImage() {
    var img = document.getElementById('archive');
    img.src = 'images/archive-hover-aqua.png';
}

function restoreImage() {
    var img = document.getElementById('archive');
    img.src = 'images/archive-text.png';
}

function changeZoe() {
    var img = document.getElementById('hi-zoe');
    img.src = 'images/hi-zoe-hover.png';
}

function restoreZoe() {
    var img = document.getElementById('hi-zoe');
    img.src = 'images/hi-zoe-text.png';
}




