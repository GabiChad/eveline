// background video section
window.addEventListener('focus', function() {
  document.getElementById('background-video').play();
});

window.addEventListener('blur', function() {
  document.getElementById('background-video').pause();
});


// draggable pictures
document.addEventListener('DOMContentLoaded', function() {
    makeImagesDraggable();
  });
  
  function makeImagesDraggable() {
    var draggableImages = document.querySelectorAll('.draggable-image');
  
    draggableImages.forEach(function(image) {
      image.addEventListener('mousedown', function(e) {
        startDragging(e, image);
      });
    });
  
    document.addEventListener('mousemove', function(e) {
      continueDragging(e);
    });
  
    document.addEventListener('mouseup', function() {
      stopDragging();
    });
  }
  
  function startDragging(e, image) {
    isDragging = true;
    draggedImage = image;
  
    offsetX = e.clientX - draggedImage.getBoundingClientRect().left;
    offsetY = e.clientY - draggedImage.getBoundingClientRect().top;
  
    draggedImage.style.cursor = 'grabbing';
    draggedImage.style.zIndex = '2';
  
    e.preventDefault();
  }
  
  function continueDragging(e) {
    if (isDragging) {
      draggedImage.style.left = e.clientX - offsetX + 'px';
      draggedImage.style.top = e.clientY - offsetY + 'px';
    }
  }
  
  function stopDragging() {
    if (isDragging) {
      isDragging = false;
      draggedImage.style.cursor = 'grab';
      draggedImage.style.zIndex = '1';
    }
  
  
    // If the dragged element is an image, redirect to the associated page
    if (draggedElement.classList.contains('draggable-image')) {
      var link = draggedElement.querySelector('a');
      var destinationPage = link.getAttribute('href');
      window.location.href = destinationPage;
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    makeImagesDraggable();
  });
  
  function makeImagesDraggable() {
    var draggableImages = document.querySelectorAll('.draggable-image');
  
    draggableImages.forEach(function(image) {
      image.addEventListener('mousedown', function(e) {
        startDragging(e, image);
      });
    });
  
    document.addEventListener('mousemove', function(e) {
      continueDragging(e);
    });
  
    document.addEventListener('mouseup', function() {
      stopDragging();
    });
  }
  
  function startDragging(e, image) {
    isDragging = true;
    draggedImage = image;
  
    offsetX = e.clientX - draggedImage.getBoundingClientRect().left;
    offsetY = e.clientY - draggedImage.getBoundingClientRect().top;
  
    draggedImage.style.cursor = 'grabbing';
    draggedImage.style.zIndex = '2';
  
    e.preventDefault();
  }
  
  function continueDragging(e) {
    if (isDragging) {
      draggedImage.style.left = e.clientX - offsetX + 'px';
      draggedImage.style.top = e.clientY - offsetY + 'px';
    }
  }
  
  function stopDragging() {
    if (isDragging) {
      isDragging = false;
      draggedImage.style.cursor = 'grab';
      draggedImage.style.zIndex = '1';
    }
  }