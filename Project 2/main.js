const images = ["images/post1.png", "images/post2.png"]
const postItLink = document.getElementById("draw-please");
const postIt = document.getElementById("post-of-the-day");
const todaysDate = new Date();
const year = todaysDate.getFullYear();
const month = todaysDate.getMonth() + 1; // Month is zero-based, so add 1
const day = todaysDate.getDate();

imageName = `images/${year}-${month}-${day}.png`;
console.log(imageName);
postIt.src = imageName;
date = `${year}-${month}-${day}`;
document.getElementById("date").textContent = date;
//build image name
// postItLink.onclick = getPostIt;

// function getPostIt() {
//     event.preventDefault(); // Prevent the default link behavior
//     // currentIndex = (currentIndex + 1) % images.length; // Cycle through images
//     imageName = "images/" + "${year}-${month}-${day}" + ".png";
//     console.log(imageName)
//     galleryImage.src = imageName; // Change the image source
// };