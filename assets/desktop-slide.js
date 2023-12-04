document.addEventListener('DOMContentLoaded', function() {
    var sliderContainer = document.querySelector('.featured-prod-slider');

    if (sliderContainer) {
      var startX, currentTranslateX = 0, isDragging = false;

      sliderContainer.addEventListener('touchstart', function(e) {
        var touch = e.touches[0];
        startX = touch.clientX;
        isDragging = true;
      });

      sliderContainer.addEventListener('touchmove', function(e) {
        if (!isDragging) return;

        var touch = e.touches[0];
        var deltaX = touch.clientX - startX;

        // Prevent default to avoid unwanted scroll behavior
        e.preventDefault();

        // Calculate the new transform value
        var newTranslateX = currentTranslateX + deltaX;

        // Apply the new transform value
        sliderContainer.style.transform = 'translateX(' + newTranslateX + 'px)';
      });

      sliderContainer.addEventListener('touchend', function() {
        isDragging = false;

        // Update the currentTranslateX after the touch ends
        var transformStyle = getComputedStyle(sliderContainer).transform;
        currentTranslateX = parseInt(transformStyle.split(',')[4]) || 0;
      });
    }
  });