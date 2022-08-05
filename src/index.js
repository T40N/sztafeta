import Button from "./components/Button.js";
import Score from "./components/Score.js";
import shuffle from "./utilities/shuffle.js";

//adds id to cards
// const cards = [...document.getElementsByClassName('card')]
// cards.forEach((child, idx) => {child.id = `card${++idx}`;});

const language_ENG = "eng";
const language_PL = "pl";
let first = true;
let firstGuess = null;

let idiomsArray = [
  {
    eng: "It’s raining cats and dogs",
    pl: "Leje jak z cebra",
  },
  {
    eng: "Let the cat out of the bag",
    pl: "Wygadać się",
  },
  {
    eng: "It’s not a rocket science",
    pl: "To nie jest zbyt skomplikowane",
  },
  {
    eng: "No pain, no gain",
    pl: "Trzeba pracować na efekty",
  },
];
// idiomsArray = shuffle(idiomsArray);

//giving english cards their number

const start = () => {
  let cardsENG = shuffle(
    document.querySelectorAll(".card-container__card--ang")
  );

  cardsENG.forEach((child, id) => {
    child.setAttribute("pair", id);
    child.setAttribute("language", language_ENG);
    // const text = document.createElement("p");
    // if (!child.innerHTML.includes("<p>")) {
    //   text.innerHTML = idiomsArray[idx].ang;
    //   text.pair = idiomsArray[idx].pair;
    //   child.appendChild(text);
    // } else {
    //   const die = child.innerHTML;
    //   die = "";
    // }
  });

  let cardsPL = shuffle(document.querySelectorAll(".card-container__card--pl"));

  cardsPL.forEach((child, id) => {
    child.setAttribute("pair", id);
    child.setAttribute("language", language_PL);
    // const text = document.createElement("p");
    // if (!child.innerHTML.includes("<p>")) {
    //   text.innerHTML = idiomsArray[idx].ang;
    //   text.pair = idiomsArray[idx].pair;
    //   child.appendChild(text);
    // } else {
    //   const die = child.innerHTML;
    //   die = "";
    // }
  });

  //giving polish cards their number
  // const cardsPl = [
  //   ...document.getElementsByClassName("card-container__card--pl"),
  // ];
  // cardsPl.forEach((child, idx) => {
  // child.setAttribute("pair", idiomsArray[idx].pair);
  // child.pair = idiomsArray[idx].pair;
  // //dodaje p bo łatwo bedzie można w cssie się go pozbyc
  // const text = document.createElement("p");
  // if (!child.innerHTML.includes("<p>")) {
  //   text.innerHTML = idiomsArray[idx].pl;
  //   text.pair = idiomsArray[idx].pair;
  //   child.appendChild(text);
  // } else {
  //   const die = child.innerHTML;
  //   die = "";
  // }
  // });
};

//finding a pair
// const whatWasClicked = (e) => {
//   console.log(e.target.getAttribute("pair"));
//   console.log(e.target);
//   console.log(e.target.pair);
//   console.log("typ", e.target.tagName);
//   console.log(e.target.classList);
//   return e.target;
// };

const clickHandler = (e) => {
  if (!e.target.classList.contains("card")) return;

  let pair = Number(e.target.getAttribute("pair"));
  let language = e.target.getAttribute("language");

  let element = {
    target: e.target,
    pair,
    language,
  };

  showIdiom(e.target, idiomsArray[pair][language]);

  if (first) {
    firstGuess = { ...element };
  } else {
    if (
      firstGuess.pair === element.pair &&
      firstGuess.language !== element.language
    ) {
      hideCards(firstGuess.target, element.target);
    }

    hideIdiom(firstGuess.target, element.target);
  }

  first = !first;
};
// const getTwoCards = () => {};

// const one = window.addEventListener("click", whatWasClicked);
// console.log("one:", one);

// const check = (one) => {
//   const two = window.addEventListener("click", whatWasClicked);
//   console.log("two", two);
//   if (one.pair == two.pair) {
//     if (one.classList != two.classList) {
//       console.log("brawo");
//       return;
//     }
//   }
// };
// check(one);

document.addEventListener("click", clickHandler);
document.querySelector(".startOver").addEventListener("click", () => {
  start();
});

const showIdiom = (element, idiom) => {
  element.classList.add("turn");
  element.insertAdjacentHTML("afterbegin", `<p>${idiom}</p>`);
};

const hideIdiom = (firstGuess, secondGuess) => {
  setTimeout(() => {
    firstGuess.classList.remove("turn");
    secondGuess.classList.remove("turn");
    firstGuess.innerHTML = "";
    secondGuess.innerHTML = "";
  }, 1000);
};

const hideCards = (firstGuess, secondGuess) => {
  setTimeout(() => {
    firstGuess.style.visibility = "hidden";
    secondGuess.style.visibility = "hidden";
  }, 1500);
};

start();
