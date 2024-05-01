var AppScriptUrl = 'https://script.google.com/macros/s/AKfycbw8-_bHUzNjOjTUL8b0fPZLW3bpztIrYxBvw4xkddIiLuwSVUFzyUDqxfsAOOgANis/exec';

function getData(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Request was successful
        var response = JSON.parse(xhr.responseText);
        // Handle the response data here
         handleData(response);
         console.log(response);
      } else {
        // Request failed
        console.error('Request failed:', xhr.status);
      }
    }
  };
  xhr.send();
}

// this function prints the data to the HTML page.
function handleData(response) {
  var sheetDataElement = document.getElementById("sheetData");

  response.forEach(function(item) {
    // Create a new <li> element
    var listItem = document.createElement("div");
    var message = " ";
    // Iterate over the keys of the object
    Object.keys(item).forEach(function(key) {
      // // Create a new <div> element for each key-value pair
      // var divKeyValue = document.createElement("div");
      // // Set class name as the key
      // divKeyValue.className = key;
      // // Set innerHTML as the value
      // divKeyValue.innerHTML = item[key];
      // // Append the <div> element for the key-value pair to the <li> item
      // listItem.appendChild(divKeyValue);
      message = message + item[key] + ", ";
    });
    insertRandomImage('images/star3.png', message);

    // Append the <li> element to the "sheetData" element
    sheetDataElement.appendChild(listItem);
  });
}

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function insertRandomImage(imageUrl, message) {
  // Get viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Generate random coordinates within viewport
  const randomX = getRandomNumber(0, viewportWidth * 0.9);
  const randomY = getRandomNumber(0, viewportHeight * 0.9);

  // Create image element
  const img = document.createElement('img');
  img.src = imageUrl;
  img.style.position = 'absolute';
  img.style.left = randomX + 'px';
  img.style.top = randomY + 'px';
  img.setAttribute('data-message', message);

  // Append image to body
  document.body.appendChild(img);

  img.addEventListener('mouseover', displayMessage);
  img.addEventListener('mouseout', hideMessage);
}

function displayMessage(event) {
  // Retrieve the custom message from the image's data attribute
  const message = event.target.dataset.message;

  // Set the custom message to the message div
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = message;

  // Position the message div next to the cursor
  messageDiv.style.left = event.pageX + 'px';
  messageDiv.style.top = event.pageY + 'px';
  messageDiv.style.display = 'block';
}

 // Function to hide the message when mouse leaves the image
 function hideMessage() {
  document.getElementById('message').style.display = 'none';
}

// Example usage:
getData(AppScriptUrl);


