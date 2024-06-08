const addButtonClickEvent = () => {
  const activationButton = document.getElementById('activation-button');

  activationButton.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'activate' });
    });
  });
};

document.addEventListener('DOMContentLoaded', addButtonClickEvent);
