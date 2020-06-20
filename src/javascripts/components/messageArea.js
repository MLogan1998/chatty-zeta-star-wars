import moment from 'moment';
import messagedata from '../helpers/data/messageData';
import utils from '../helpers/utils';


const messages = messagedata.getMessageData();

const messageLimit = () => {
  if (messages.length > 19) {
    messages.splice(0, 1);
  }
};


const displayMessages = () => {
  let domString = '<div id="addedMessage">';
  const allow = document.querySelector('input[type = radio]:checked').value;

  for (let i = 0; i < messages.length; i += 1) {
    const cleanTime = moment(messages[i].timestamp).format('h:mm a');
    domString += `
                <div class="newMessage">
                <div class="messageHead">
                <img class="userAvatar" src="${messages[i].avatar}">
                <p class="userName mb-0 ${messages[i].userId}">${messages[i].userId}</p>
                <h6 class="timestamp mb-0">${cleanTime}</h6>
                <div class="deleteButton">`;

    if (messages[i].userId === allow) {
      domString += ` 
                <span class="edit mb-0 mr-2"><i id="${messages[i].id}" class="edit far fa-edit" ></i></span>
                <span class="delete mb-0"><i id="${messages[i].id}" class="delete fas fa-times-circle ${messages[i].userId}"></i></span>`;
    }
    domString += `
                </div>
                </div>
                <div class="messageBody">
                <p class="message">${messages[i].body}</P>                    
                </div>
                </div>`;

    utils.printToDom('#messageArea', domString);
    messageLimit();
  }
};

$('body').on('click', '.custom-control-input', displayMessages);

export default { displayMessages };
