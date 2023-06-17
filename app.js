const sendChatBtn = document.querySelector('.chatbot__input-box span');
const chatInput = document.querySelector('.chatbot__textarea');

let userMessage;

const handleChat = () => {
  userMessage = chatInput.value.trim();
  console.log(userMessage);
};

sendChatBtn.addEventListener('click', handleChat);
