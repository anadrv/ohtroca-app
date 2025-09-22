document.querySelector('.btn-send').addEventListener('click', () => {
  const input = document.querySelector('.chat-input');
  const message = input.value;
  
  if (message.trim() !== '') {
    //Create a new element
    const newMessageDiv = document.createElement('div');
    newMessageDiv.className = 'message sent';
    newMessageDiv.innerHTML = `<p>${message}</p>`;

    //Add new message
    document.querySelector('.message-area').appendChild(newMessageDiv);

    //Clean text
    input.value = '';

    //Last message
    const messageArea = document.querySelector('.message-area');
    messageArea.scrollTop = messageArea.scrollHeight;
  }
});