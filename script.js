function createCalendar(daysCount) {
    const calendar = document.getElementById('calendar');
  
    for (let day = 1; day <= daysCount; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('calendar-day');
        dayDiv.textContent = day;
        dayDiv.setAttribute('id', 'door' + day); 

        dayDiv.addEventListener('click', (function(dayCopy) {
            return function() {
                showDayImage(dayCopy);
            };
        })(day));

        calendar.appendChild(dayDiv);
    }
}

function showDayImage(day) {
    const modal = document.getElementById('modal' + day);   
    const modalImg = document.getElementById('img' + day);
    const captionText = document.getElementById('caption' + day);

    
    if(modal && modalImg && captionText) {
        modal.style.display = "block";
        modalImg.src = 'images/day' + day + '.jpg'; 
        captionText.innerHTML = 'Caption for Day ' + day; 
    }
}

window.onload = function() {
    createCalendar(24);

};

function hideModal(day) {
    var modal = document.getElementById('modal' + day);
    if(modal) {
        modal.style.display = "none";
    }
}

function showDay1Modal() {
    var modal = document.getElementById('modal1');
    var modalImg = document.getElementById('image1');
    var captionText = document.getElementById('caption1');
    
    modal.style.display = "block";
    modalImg.src = 'corgiday1.jpg';
    captionText.innerHTML = "Happy December! Embrace the holiday spirit."; 
}

var day1Door = document.getElementById('door1');

day1Door.onclick = function() {
    showDay1Modal(); 
}
var spanClose1 = document.getElementById('close1');

spanClose1.onclick = function() {
    var modal = document.getElementById('modal1');
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById('modal1');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function showDayVideo(day) {
    const modal = document.getElementById('modal' + day);   
    const videoElement = document.getElementById('video' + day);
    const videoSource = document.getElementById('videoSrc' + day);
    const captionText = document.getElementById('caption' + day);

    if(modal && videoElement && videoSource && captionText) {
        modal.style.display = "block";
        videoSource.src = 'videos/corgivid1' + day + '.mp4'; // Update the path to your video file
        videoElement.load(); // Load the new video source
        captionText.innerHTML = 'Corgi chilling by the christmas tree.' + day; // Update with the correct caption
    }
}
var day2Door = document.getElementById('door2');

day2Door.onclick = function() {
    showDayVideo(2);
}
var spanClose2 = document.getElementById('close2');

spanClose2.onclick = function() {
    var modal = document.getElementById('modal2');
    modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    // Set the base year and month for the calendar (e.g., December 2023)
    const year = 2023;
    const month = 11; // December is month 11 in JavaScript Date (0-indexed)
  
    document.querySelectorAll('.door').forEach((door, index) => {
      // Set the date for each door (index + 1 represents the day)
      const doorDate = new Date(year, month, index + 1);
      doorDate.setHours(0, 0, 0, 0); // Normalize door date to midnight
  
      door.setAttribute('data-date', doorDate.toISOString().split('T')[0]); // Set the date in 'YYYY-MM-DD' format
  
      // Rest of your event listener logic...
      door.addEventListener('click', () => {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Normalize current date to midnight for comparison
  
        if (currentDate.getTime() >= doorDate.getTime()) {
          // Date is valid, open modal logic here
          // ...
        } else {
          // Date is invalid, show message or do nothing
          // ...
        }
      });
    });
  
    // Close modal logic
    // ...
  });
  
  document.querySelectorAll('.door').forEach(door => {
    door.addEventListener('click', () => {
      door.classList.add('opened');
    });
  });
  
  function updateCountdown() {
    // Calculate and display the time until Christmas
  }
  setInterval(updateCountdown, 1000);
  