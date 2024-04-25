document.addEventListener('DOMContentLoaded', function () {
    const captureButton = document.getElementById('captureButton');
    const screenshotContainer = document.getElementById('screenshotContainer');
    captureButton.addEventListener('click', captureScreenshot);
    function captureScreenshot() {
    //   chrome.tabs.captureVisibleTab({ format: 'png' }, function (dataUrl) {
    //     const img = new Image();
    //     img.src = dataUrl;
    //     screenshotContainer.innerHTML = '';
    //     screenshotContainer.appendChild(img);
    //   });
        var myWindow = window.open("", "Post-it", "width=200,height=100");
    }

  });