// This function will be called when the button is clicked
function addButtonClickEvent() {
    // Get the button by its ID or class
    const activationButton = document.getElementById('activation-button'); // Replace with your button's ID

    // Add click event listener to the button
    activationButton.addEventListener('click', function() {
        // Send a message to the content script to add the div
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "activate"});
        });
    });
}

// Call the function to add the event listener when the popup loads
document.addEventListener('DOMContentLoaded', addButtonClickEvent);