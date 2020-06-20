import axios from 'axios';
import utils from '../helpers/utils';
import messageArea from './messageArea';
import inputArea from './inputArea';

let gifCollection;
let appendMessage;

const selectThisGiffy = (e) => {
  const selectedGifId = e.target.closest('.gif-card').id;
  console.error(selectedGifId);
  console.error(gifCollection);
  const selectedgifIndex = gifCollection.findIndex((gif) => gif.id === selectedGifId);
  console.error(selectedgifIndex);
  const selectedImgUrl = gifCollection[selectedgifIndex].images.downsized.url;
  const domstring = `<textarea class="form-control editText" id="exampleFormControlTextarea1" rows="3">${appendMessage}<br /><img class="responsiveGif" src="${selectedImgUrl}"></textarea>`;
  utils.printToDom('.messageInput', domstring);
  document.querySelector('.gifSearch').value = '';
  inputArea.eventHandler();
  messageArea.displayMessages();
};

const attachEvent = () => {
  const allButtons = document.querySelectorAll('button.successButton');
  for (let i = 0; i < allButtons.length; i += 1) {
    const element = allButtons[i];
    element.addEventListener('click', selectThisGiffy);
  }
};

const makeGifyCards = () => {
  let domString = "<div class='row'>";
  for (let i = 0; i < 10; i += 1) {
    const gif = gifCollection[i];

    domString += `
      <div class="col-4 mb-4">
      <div id="${gif.id}" class="card text-center gif-card">
      <img class="card-img-top" src="${gif.images.downsized.url}" alt="Picture of the ${gif.id}">
      <button type="button" id="${gif.id}" class="m-auto btn btn-outline-success successButton"><i class="fas fa-arrow-circle-down"></i></button>
      </div>
      </div>`;
  }

  domString += '</div>';

  utils.printToDom('#messageArea', domString);
  attachEvent();
};


const testSearch = () => {
  appendMessage = document.querySelector('#exampleFormControlTextarea1').value;
  const searchTerm = document.querySelector('.gifSearch').value;
  const api = 'https://api.giphy.com/v1/gifs/search?';
  const apiKey = 'api_key=***key_here***';
  const query = `&q=$${searchTerm}$limit=10`;
  const url = api + apiKey + query;

  axios.get(url).then((results) => {
    gifCollection = results.data.data;
    makeGifyCards();
  });
};

const gifListen = () => {
  $('body').on('click', '.pleasework', testSearch);
};

$('body').on('click', '.pleasework', testSearch);

export default { gifListen };
