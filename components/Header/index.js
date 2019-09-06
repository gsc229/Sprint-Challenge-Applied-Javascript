// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headOne = Header("Sept 6, 2019", "Lambda Times", "98");
const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(headOne);
function Header(d, ti, tem) {
  const header = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temp = document.createElement("span");
  // append items appropriately:
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);
  // add the classes
  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");
  // add the content to the elements:
  date.textContent = d;
  title.textContent = ti;
  temp.textContent = `${tem}deg`;

  return header;
}
