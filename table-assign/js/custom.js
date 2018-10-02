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

 // complete with code to select and populate the table

// const linkParagraph = document.querySelector("#listLinks");
// const list = document.createElement("ul");
// artists.forEach(function(artist) {
//   const listItem = document.createElement("li");
//   const anchor = document.createElement("a");
//   anchor.href = artist.link;
//   anchor.target = "_blank"
//   anchor.innerHTML = artist.name;
//   listItem.appendChild(anchor);
//   list.appendChild(listItem);
// });

// linkParagraph.appendChild(list);

//sort by name
function byName(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

//sort

console.log(artists.sort(byName));

//sort random

function pickArtist() {
  const randomIndex = Math.floor(Math.random() * artists.length);
  return artists[randomIndex].name;
}

//shuffle artists randomly

Array.prototype.shuffle = function() {
  let input = this;
  for (let i = input.length-1; 1 >= 1; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = input(randomIndex);
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return imput;
}

// a button showing random artist

const randomButton = document.querySelector("#random-button");
randomButton.addEventListener("click", showRandomArtist);

function showRandomArtist() {
  const artist = document.querySelector("#random-artist");
  artist.innerHTML = pickArtist();
}