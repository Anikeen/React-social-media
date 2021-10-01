function getDate() {
  const date = new Date();
  const fullDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
  const fullTime = `${date. getHours()}:${date. getMinutes()}:${date. getSeconds()}`;

  return fullDate + ' ' + fullTime;
}

function fetchNews() {
  const news = [
    {
      author: 'User One',
      date: getDate(),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, inventore suscipit! Placeat atque veniam non ad, sequi quasi ipsa iure unde dolore eos, ipsum laudantium sint voluptatum odio dolorem odit?'
    },
    {
      author: 'User Two',
      date: getDate(),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, inventore suscipit! Placeat atque veniam non ad, sequi quasi ipsa iure unde dolore eos, ipsum laudantium sint voluptatum odio dolorem odit?'
    },
    {
      author: 'User Three',
      date: getDate(),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, inventore suscipit! Placeat atque veniam non ad, sequi quasi ipsa iure unde dolore eos, ipsum laudantium sint voluptatum odio dolorem odit?'
    }
  ];

  return news;
}

export default fetchNews;