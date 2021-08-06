import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
    
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorName = document.createElement('span');
  const authorImg = document.createElement('img');

  card.className = 'card';
  headline.className = 'headline';
  author.className = 'author';
  imgContainer.className = ('img-container');

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(authorImg);

  headline.textContent = article.headline;
  authorName.textContent = article.authorName;
  authorImg.src = article.authorPhoto;

  card.addEventListener('click', () => console.log(headline.textContent));

  return card;
}
const a = axios.get('http://localhost:5000/api/articles');
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/articles')
  .then(res => {
    const data = res.data.articles;
    const select = document.querySelector(selector);

    const bootstrap = data.bootstrap;
    const javascript = data.javascript;
    const jquery = data.jquery;
    const node = data.node;
    const technology = data.technology;

    const artArray = [...bootstrap, ...javascript, ...jquery, ...node, ...technology];
    artArray.forEach(elem => {
      select.appendChild(Card(elem));
      console.log(select);
    })
  })
  .catch(err => {
    console.error(err);
  })

}

export { Card, cardAppender }


