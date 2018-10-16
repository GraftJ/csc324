/********************************************************************
 * 
 * Your introductory remarks go here.
 * 
 *******************************************************************/

// The array of objects, one object for each artist.

const artists = [
  {
    name: "Ms Scandalous",
    birthYear: 1985,
    link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
  },
  {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
]

function makeTable(array) {
  let contents =
    `
   <tr>
      <th>Name</th>
      <th>Date of Birth</th>
      <th>Link</th>
    </tr>
   `;
  artists.forEach(function (artist) {
    contents += "<tr>";
    contents += `<td>${artist.name}</td>`;
    contents += `<td>${artist.birthYear}</td>`;
    contents += `<td><a href="${artist.link}">${artist.link}</a></td>`;
  });
  return contents;
}

const tab = document.querySelector("#bhangra");
tab.innerHTML = makeTable(artists);

//sort by name
function byName(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

function sortName() {
  const title = document.querySelector("#bhangra");
  title.innerHTML = byName(artist.name);
}

const nameButton = document.querySelector("#name-button");
nameButton.addEventListener("click", sortName);

//sort by date
function byDate(a, b) {
  if (a.birthYear < b.birthYear) return -1;
  if (a.birthYear > b.birthYear) return 1;
  return 0;
}

function sortDate() {
  const date = document.querySelector("#bhangra");
  date.innerHTML = byDate(artist.birthYear);
}

const dateButton = document.querySelector("#date-button");
dateButton.addEventListener("click", sortDate);

//shuffle artists randomly
Array.prototype.shuffle = function () {
  let input = this;
  for (let i = input.length - 1; 1 >= 1; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = input(randomIndex);
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return imput;
}

function sortRando() {
  const rando = document.querySelector("#bhangra");
  rando.innerHTML = shuffle(artist.name);
}

const randomButton = document.querySelector("#random-button");
randomButton.addEventListener("click", sortRando);