// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let topicsArray = [];
const topicsSection = document.querySelector(".topics");
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    topicsArray = response.data.topics;
    topicsArray.forEach(topic => {
      topicsSection.appendChild(topicCreator(topic));
    });
    console.log(topicsArray);
  })

  .catch(error1 => {
    console.log("The data was not returned", error1);
  });

// crate the tab component function function:
function topicCreator(topic) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = topic;

  return tab;
}
