// Function to update the countdown
function updateCountdown() {
  const eventDateInput = document.getElementById('event-date').value;
  const eventTimeInput = document.getElementById('event-time').value;

  // Combine date and time inputs into a single string
  const eventDateTimeString = eventDateInput + ' ' + eventTimeInput;

  // Parse the combined string into a Date object
  const eventDate = new Date(eventDateTimeString);

  // Check if the parsed date is valid
  if (isNaN(eventDate)) {
    document.getElementById('countdown').innerHTML = 'Invalid date and time';
    return;
  }

  // Calculate the time difference between the event date and the current date
  const currentDate = new Date();
  const timeDifference = eventDate - currentDate;

  // Check if the event has already occurred
  if (timeDifference < 0) {
    document.getElementById('countdown').innerHTML = 'Event has already occurred';
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('countdown').innerHTML = `
    <div>${days} days</div>
    <div>${hours} hours</div>
    <div>${minutes} minutes</div>
    <div>${seconds} seconds</div>
  `;
}

// Add event listeners to the date and time input fields
document.getElementById('event-date').addEventListener('change', updateCountdown);
document.getElementById('event-time').addEventListener('change', updateCountdown);

// Call the updateCountdown function initially
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Function to handle checklist item click event
function handleChecklistItemClick(event) {
    const checkbox = event.target;
    const listItem = checkbox.parentNode;
  
    // Toggle the "checked" class on the list item
    listItem.classList.toggle('checked');
  }
  
  // Function to add a new checklist item
  function addChecklistItem() {
    const checklist = document.getElementById('checklist');
    const newItemText = document.getElementById('new-item').value;
  
    if (newItemText.trim() === '') {
      return;
    }
  
    // Create a new list item
    const listItem = document.createElement('li');
  
    // Create a checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', handleChecklistItemClick);
  
    // Create a text node for the checklist item text
    const textNode = document.createTextNode(newItemText);
  
    // Append the checkbox and text node to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(textNode);
  
    // Append the list item to the checklist
    checklist.appendChild(listItem);
  
    // Clear the input field
    document.getElementById('new-item').value = '';
  }
  
  // Add event listener to the "Add" button
  document.getElementById('add-button').addEventListener('click', addChecklistItem);