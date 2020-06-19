import moment from 'moment';
import messageData from '../helpers/data/messageData';
import displayMessages from './messageArea';

// import user from '../helpers/data/userData';
// eslint-disable-next-line consistent-return
const userAv = () => {
  const avatar = document.querySelector('input[type = radio]:checked').value;
  switch (avatar) {
    case 'obi1Kenobi':
      return ('https://i.imgur.com/83RbTKC.png');
    case 'TheHighGround':
      return ('https://i.imgur.com/KlHd6Lu.png');
    case 'hanShotFirst2019':
      return ('https://i.imgur.com/M060qGz.png');
    case 'jar-jarSuck2020':
      return ('https://i.imgur.com/XHr1URo.jpg');
    case 'darksidehasCOOKI3S':
      return ('https://i.imgur.com/8kQp4FT.png');
    default:
  }
};
// const users = user.getUserData();
let messageId = 6;
const pushMessage = (e) => {
  document.getElementById('clearButton').disabled = false;
  // new Message object to push this in to messageData
  const newMessage = {};
  const timeNow = moment();
  // const userName = document.querySelector('input[type = radio]:checked').value;
  const userId = document.querySelector('input[type = radio]:checked').value;
  const messageBody = e.target.value;

  newMessage.avatar = userAv();
  newMessage.id = messageId;
  newMessage.timestamp = timeNow;
  newMessage.body = messageBody;
  newMessage.userId = userId;
  // Called the function to push newMessage obj in to messageData
  messageData.setMessageData(newMessage);

  messageId += 1;

  displayMessages.displayMessages();
};

const codeListener = (e) => {
  const codeKey = e.keyCode;

  if (codeKey === 13) {
    pushMessage(e);
    document.getElementById('exampleFormControlTextarea1').value = '';
  }
};

const eventHandler = () => {
  document.querySelector('#exampleFormControlTextarea1').addEventListener('keypress', codeListener);
};

export default { eventHandler };
