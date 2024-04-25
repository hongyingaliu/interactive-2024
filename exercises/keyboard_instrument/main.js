function spreadTo255(inputValue, minInput, maxInput) {
  // Map the input value from the range (minInput, maxInput) to the range (0, 255)
  return Math.round((inputValue - minInput) * (255 / (maxInput - minInput)));
}

var windows = document.querySelectorAll('.window');

document.body.onkeydown = function(keypress_event){
  var key = keypress_event.key;
  var code = key.charCodeAt(0);
  // code = code * 2;
  // document.getElementById("key_display").innerHTML = code;
  code = spreadTo255(code, 40, 120);
  
  var color = 'hsl(' + code + ',' + 100 + '%,' + 50 + '%)';
  windows.forEach(function(window) {
    window.style.backgroundColor = color; // Change 'blue' to desired color
  });
};