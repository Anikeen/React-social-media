function fetchNews() {
  const news = [
    {
      author: 'User One',
      date: new Date().getDate(),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, inventore suscipit! Placeat atque veniam non ad, sequi quasi ipsa iure unde dolore eos, ipsum laudantium sint voluptatum odio dolorem odit?'
    },
    {
      author: 'User Two',
      date: new Date().getDate(),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, inventore suscipit! Placeat atque veniam non ad, sequi quasi ipsa iure unde dolore eos, ipsum laudantium sint voluptatum odio dolorem odit?'
    },
    {
      author: 'User Three',
      date: new Date().getDate(),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, inventore suscipit! Placeat atque veniam non ad, sequi quasi ipsa iure unde dolore eos, ipsum laudantium sint voluptatum odio dolorem odit?'
    }
  ];

  return news;
}

export default fetchNews;