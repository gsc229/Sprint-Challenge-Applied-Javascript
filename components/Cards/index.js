// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector(".cards-container");
const newTopicsArr = [
  "javascript",
  "bootstrap",
  "technology",
  "jquery",
  "node"
];
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    let currnetTopics = response.data.articles;
    console.log(`topicsArray: ${topicsArray}`);
    console.log(currnetTopics);
    newTopicsArr.forEach(topic => {
      let topicArticles = currnetTopics[topic];
      topicArticles.forEach(article => {
        cardsContainer.appendChild(cardCreator(article));
      });
      //console.log(topicArticles[0]);
    });

    //console.log(currnetTopics.bootstrap[0].authorName);
  });

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

function cardCreator(article) {
  const card = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const authSpan = document.createElement("span");
  // add the classes
  card.classList.add("card");
  cardHeadline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  // append appropriately
  card.appendChild(cardHeadline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(image);
  author.appendChild(authSpan);
  console.log(card);
  //imgContainer.appendChild(image);

  // fill it with the content
  cardHeadline.textContent = article.headline;

  authSpan.textContent = `By: ${article.authorName}`;
  const photoPath = article.authorPhoto;
  /*  console.log(photoPath);
  const photoNoDot = photoPath.replace(".", "");
  console.log(photoPath.replace(".", "")); */
  image.src = `${photoPath}`;

  // don't forget to return the card:
  return card;
}
