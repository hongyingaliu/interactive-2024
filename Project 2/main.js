function generateImageList(startDate) {
    const images = [];
    const currentDate = new Date();

    startDate.setDate(startDate.getDate() + 1);
    currentDate.setDate(currentDate.getDate() + 1);

    // Loop through each date starting from the given start date up to today's date
    for (let date = new Date(startDate); date <= currentDate; date.setDate(date.getDate() + 1)) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Month is zero-based, so add 1
        const day = date.getDate();
        
        
        // Format the image name
        const imageName = `images/${year}-${month}-${day}.png`;

        // Add the image name to the list
        images.push(imageName);
    }

    return images;
}

// Example usage:
const startDate = new Date('2024-06-21'); // Example start date
var images = generateImageList(startDate);
console.log(images); // Output the list of image names


// const images = []
// const todaysDate = new Date();
// const year = todaysDate.getFullYear();
// const month = todaysDate.getMonth() + 1; // Month is zero-based, so add 1
// const day = todaysDate.getDate();

// imageName = `images/${year}-${month}-${day}.png`;
// console.log(imageName);
// postIt.src = imageName;
// date = `${year}-${month}-${day}`;
// document.getElementById("date").textContent = date;
//build image name
// postItLink.onclick = getPostIt;

// function getPostIt() {
//     event.preventDefault(); // Prevent the default link behavior
//     // currentIndex = (currentIndex + 1) % images.length; // Cycle through images
//     imageName = "images/" + "${year}-${month}-${day}" + ".png";
//     console.log(imageName)
//     galleryImage.src = imageName; // Change the image source
// };