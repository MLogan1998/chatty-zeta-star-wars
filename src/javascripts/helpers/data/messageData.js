const messageData = [
  {
    id: 1,
    timestamp: 'Fri Jun 12 2020 17:39:24 GMT-0500 (Central Daylight Time)',
    body: 'A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force.',
    userId: 'obi1Kenobi',
    avatar: 'https://i.imgur.com/83RbTKC.png',
  },
  {
    id: 2,
    timestamp: 'Fri Jun 12 2020 17:44:13 GMT-0500 (Central Daylight Time)',
    body: 'Sokan teaching revolved around using the environment itself to gain a tactical advantage in combat.',
    userId: 'TheHighGround',
    avatar: 'https://i.imgur.com/KlHd6Lu.png',
  },
  {
    id: 3,
    timestamp: 'Fri Jun 12 2020 17:46:02 GMT-0500 (Central Daylight Time)',
    body: 'Greedo shoots at Han and misses, without explanation, from point-blank range, and then Han shoots him. ',
    userId: 'hanShotFirst2019',
    avatar: 'https://i.imgur.com/M060qGz.png',
  },
  {
    id: 4,
    timestamp: 'Fri Jun 12 2020 17:59:13 GMT-0500 (Central Daylight Time)',
    body: 'The character was completely unbelievable. Unlike Threepio, Jar Jar had zero core competencies. He was good at absolutely nothing.',
    userId: 'jar-jarSuck2020',
    avatar: 'https://i.imgur.com/XHr1URo.jpg',
  },
  {
    id: 5,
    timestamp: 'Fri Jun 12 2020 18:02:32 GMT-0500 (Central Daylight Time)',
    body: 'Why wouldn\'t you come? You know it\'s more fun. Vader made fresh chocolate chip cookies. Come. Now.',
    userId: 'darksidehasCOOKI3S',
    avatar: 'https://i.imgur.com/8kQp4FT.png',
  },
];

const getMessageData = () => messageData;

const setMessageData = (newMessage) => {
  messageData.push(newMessage);
};

const clearMessageData = () => {
  messageData.splice(0, messageData.length);
};

export default { getMessageData, setMessageData, clearMessageData };
