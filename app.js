const sendChatBtn = document.querySelector('.chatbot__input-box span');
const chatInput = document.querySelector('.chatbot__textarea');
const chatBox = document.querySelector('.chatbot__box');

let userMessage;
const API_KEY = '';

const createChatLi = (message, className) => {
  const chatLi = document.createElement('li');
  chatLi.classList.add('chatbot__chat', className);
  let chatContent =
    className === 'outgoing'
      ? `<p>${message}
</p>`
      : `<span class="material-symbols-outlined">smart_toy</span> <p>${message}
</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const generateResponse = () => {
  const API_URL = 'https://api.openai.com/v1/chat/completions';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      message: [{ role: 'user', content: userMessage }],
    }),
  };
  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatBox.appendChild(createChatLi(userMessage, 'outgoing'));

  setTimeout(() => {
    chatBox.appendChild(createChatLi('Thinking...', 'incoming'));
    generateResponse();
  }, 600);
};

sendChatBtn.addEventListener('click', handleChat);
