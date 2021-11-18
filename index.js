window.onload = function () {
  deckShuffler();
  plFirst.value = 0;
  plFirst.style.backgroundImage = `url('assets/playing-cards-assets/extra/back.png')`;

  plSecond.value = 0;
  plSecond.style.backgroundImage = `url('assets/playing-cards-assets/extra/back.png')`;

  dlFirst.value = 0;
  dlFirst.style.backgroundImage = `url('assets/playing-cards-assets/extra/back.png')`;

  dlSecond.value = 0;
  dlSecond.style.backgroundImage = `url('assets/playing-cards-assets/extra/back.png')`;

  name1 = prompt("Enter your name: ");
  if (name1 === "") {
    name1 = "Mr. Cow";
  }
  document.querySelector(
    ".score-point"
  ).textContent = `[ Player: ${name1} \u00A0\u00A0
    Loss: ${player1.Loss} \u00A0
    Points: ${player1.Points} \u00A0
    Draw: ${player1.Draw} ]`;
};

const sadAudio = new Audio("assets/audio/sad.mp3");
const yeyAudio = new Audio("assets/audio/yey.mp3");
const wawAudio = new Audio("assets/audio/waw.mp3");

const parent = document.querySelector(".dealer-added").childNodes;
let suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let imgs = [
  "assets/playing-cards-assets/png/a1s.png",
  "assets/playing-cards-assets/png/a2s.png",
  "assets/playing-cards-assets/png/a3s.png",
  "assets/playing-cards-assets/png/a4s.png",
  "assets/playing-cards-assets/png/a5s.png",
  "assets/playing-cards-assets/png/a6s.png",
  "assets/playing-cards-assets/png/a7s.png",
  "assets/playing-cards-assets/png/a8s.png",
  "assets/playing-cards-assets/png/a9s.png",
  "assets/playing-cards-assets/png/a10s.png",
  "assets/playing-cards-assets/png/a11s.png",
  "assets/playing-cards-assets/png/a12s.png",
  "assets/playing-cards-assets/png/a13s.png",
  "assets/playing-cards-assets/png/b1d.png",
  "assets/playing-cards-assets/png/b2d.png",
  "assets/playing-cards-assets/png/b3d.png",
  "assets/playing-cards-assets/png/b4d.png",
  "assets/playing-cards-assets/png/b5d.png",
  "assets/playing-cards-assets/png/b6d.png",
  "assets/playing-cards-assets/png/b7d.png",
  "assets/playing-cards-assets/png/b8d.png",
  "assets/playing-cards-assets/png/b9d.png",
  "assets/playing-cards-assets/png/b10d.png",
  "assets/playing-cards-assets/png/b11d.png",
  "assets/playing-cards-assets/png/b12d.png",
  "assets/playing-cards-assets/png/b13d.png",
  "assets/playing-cards-assets/png/c1c.png",
  "assets/playing-cards-assets/png/c2c.png",
  "assets/playing-cards-assets/png/c3c.png",
  "assets/playing-cards-assets/png/c4c.png",
  "assets/playing-cards-assets/png/c5c.png",
  "assets/playing-cards-assets/png/c6c.png",
  "assets/playing-cards-assets/png/c7c.png",
  "assets/playing-cards-assets/png/c8c.png",
  "assets/playing-cards-assets/png/c9c.png",
  "assets/playing-cards-assets/png/c10c.png",
  "assets/playing-cards-assets/png/c11c.png",
  "assets/playing-cards-assets/png/c12c.png",
  "assets/playing-cards-assets/png/c13c.png",
  "assets/playing-cards-assets/png/d1h.png",
  "assets/playing-cards-assets/png/d2h.png",
  "assets/playing-cards-assets/png/d3h.png",
  "assets/playing-cards-assets/png/d4h.png",
  "assets/playing-cards-assets/png/d5h.png",
  "assets/playing-cards-assets/png/d6h.png",
  "assets/playing-cards-assets/png/d7h.png",
  "assets/playing-cards-assets/png/d8h.png",
  "assets/playing-cards-assets/png/d9h.png",
  "assets/playing-cards-assets/png/d10h.png",
  "assets/playing-cards-assets/png/d11h.png",
  "assets/playing-cards-assets/png/d12h.png",
  "assets/playing-cards-assets/png/d13h.png",
];
let deck = new Array();

//deck creation
for (s of suits) {
  for (v of values) {
    let weightCard = parseInt(v);
    if (v === "J" || v === "Q" || v === "K") {
      weightCard = 10;
    }
    if (v === "A") {
      weightCard = 11;
    }
    let singleCardObject = {
      suit: s,
      value: v,
      weight: weightCard,
    };
    deck.push(singleCardObject);
  }
}
for (x in deck) {
  deck[x].img = imgs[x];
}
console.log(deck);
//deck shuffle
const deckShuffler = () => {
  for (i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];
    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
};

//player creation
let name1 = "bagnolStar";
let name2 = "Dealer BOT";
let player1hand = 0;
let dealerhand = 0;
let score = 0;
let loss = 0;
let draw = 0;
let player1 = {
  Name: `${name1}`,
  Loss: loss,
  Points: score,
  Hand: player1hand,
  Draw: draw,
};
let dealer = {
  Name: `${name2}`,
  Hand: dealerhand,
};

//elements and data
let plFirst = document.querySelector(".plFirstCard");
let plSecond = document.querySelector(".plSecondCard");
let dlFirst = document.querySelector(".dlFirstCard");
let dlSecond = document.querySelector(".dlSecondCard");
let cardClass = document.querySelector(".card");

/** BUTTON CREATE EVENTLISTENER +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// start button
const startButton = document.querySelector(".start");
startButton.addEventListener("click", () => {
  hitButton.disabled = false;
  standButton.disabled = false;
  startButton.disabled = true;

  setTimeout(() => {
    gameStart();
    resetButton.disabled = false;
  }, 350);
});

//hit button
const hitButton = document.querySelector(".plHit");
hitButton.addEventListener("click", () => {
  addCard();
});

//stand button
const standButton = document.querySelector(".plStand");
standButton.addEventListener("click", () => {
  flipCard();
  standButton.disabled = true;
  hitButton.disabled = true;
});

//reset button
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  resetGame();
  standButton.disabled = true;
  hitButton.disabled = true;
  resetButton.disabled = true;
  startButton.disabled = false;
});

/** BUTTON FUNCTINALITY +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
console.log(deck[0].img);

//game start (START)
const gameStart = () => {
  //player initial
  // plFirst.textContent = `${deck[0].value} of ${deck[0].suit} (weight: ${deck[0].weight})`;
  plFirst.style.backgroundImage = `url(${deck[0].img})`;
  plFirst.style.backgroundColor = "white";

  plFirst.value = deck[0].weight;

  // plSecond.textContent = `${deck[1].value} of ${deck[1].suit} (weight: ${deck[1].weight})`;
  plSecond.style.backgroundImage = `url(${deck[1].img})`;
  plSecond.style.backgroundColor = "white";

  plSecond.value = deck[1].weight;

  player1hand += plFirst.value + plSecond.value;
  player1 = { ...player1, Hand: player1hand };

  //dealer initial
  // dlFirst.textContent = `${deck[2].value} of ${deck[2].suit} (weight: ${deck[2].weight})`;
  dlFirst.style.backgroundImage = `url(${deck[2].img})`;
  dlFirst.style.backgroundColor = "white";

  dlFirst.value = deck[2].weight;

  dealerhand += dlFirst.value;
  dealer = { ...dealer, Hand: dealerhand };

  console.clear();
  console.log(dealer);
  console.log(player1);
  console.log("dealer : " + dealerhand);
  console.log("player: " + player1hand);

  document.querySelector(".dealer-result").textContent = dealerhand;
  document.querySelector(".player-result").textContent = player1hand;

  if (
    (player1hand === 21 && dealerhand !== 10) ||
    (player1hand === 21 && dealerhand !== 11)
  ) {
    document.querySelector(".overall-result").textContent =
      "BlackJack! YOU WON!";
    score += 1;
    player1 = { ...player1, Points: score };
    hitButton.disabled = true;
    standButton.disabled = true;
    resetButton.disabled = false;
    startButton.disabled = true;

    document.querySelector(
      ".score-point"
    ).textContent = `[ Player: ${name1} \u00A0\u00A0
      Loss: ${player1.Loss} \u00A0
      Points: ${player1.Points} \u00A0
      Draw: ${player1.Draw} ]`;
    setTimeout(() => {
      yeyAudio.play();
    }, 250);
  }
  if (player1hand === 22) {
    player1hand = 12;
    document.querySelector(".player-result").textContent = player1hand;
  }
};

//add card function (HIT)
let dummy_arr = ["plFifthCard", "plFourthCard", "plThirdCard"];
let dummy_int = [6, 5, 4];
const addCard = () => {
  const popped_arr = dummy_arr.pop();
  const popped_int = dummy_int.pop();
  let newCard = document.createElement("div");
  newCard.className = `card ${popped_arr}`;
  // newCard.textContent = `${deck[popped_int].value} of ${deck[popped_int].suit} (weight: ${deck[popped_int].weight})`;
  newCard.value = deck[popped_int].weight;
  newCard.style.backgroundImage = `url(${deck[popped_int].img})`;
  newCard.style.backgroundColor = "white";

  document.querySelector(".player-added").appendChild(newCard);
  player1hand += newCard.value;
  player1 = { ...player1, Hand: player1hand };

  console.log(dealer);
  console.log(player1);
  console.log("dealer : " + dealerhand);
  console.log("player: " + player1hand);

  document.querySelector(".dealer-result").textContent = dealerhand;
  document.querySelector(".player-result").textContent = player1hand;

  setTimeout(() => {
    if (player1hand > 21) {
      document.querySelector(".overall-result").textContent = "YOU BUSTED!";
      loss += 1;
      player1 = { ...player1, Loss: loss };
      hitButton.disabled = true;
      standButton.disabled = true;
      resetButton.disabled = false;
      startButton.disabled = true;

      document.querySelector(
        ".score-point"
      ).textContent = `[ Player: ${name1} \u00A0\u00A0
        Loss: ${player1.Loss} \u00A0
        Points: ${player1.Points} \u00A0
        Draw: ${player1.Draw} ]`;

      sadAudio.play();
    }
    if (player1hand === 21 && dealerhand !== 10) {
      document.querySelector(".overall-result").textContent =
        "EZ BlackJack! You won!";
      score += 1;
      player1 = { ...player1, Points: score };
      hitButton.disabled = true;
      standButton.disabled = true;
      resetButton.disabled = false;
      startButton.disabled = true;

      document.querySelector(
        ".score-point"
      ).textContent = `[ Player: ${name1} \u00A0\u00A0
        Loss: ${player1.Loss} \u00A0
        Points: ${player1.Points} \u00A0
        Draw: ${player1.Draw} ]`;

      setTimeout(() => {
        yeyAudio.play();
      }, 250);
    }
  }, 250);
};

//flip card (STAND)
const flipCard = () => {
  // dlSecond.textContent = `${deck[3].value} of ${deck[3].suit} (weight: ${deck[3].weight})`;
  dlSecond.style.backgroundImage = `url(${deck[3].img})`;
  dlSecond.style.backgroundColor = "white";

  dlSecond.value = deck[3].weight;
  dealerhand += dlSecond.value;
  dealer = { ...dealer, Hand: dealerhand };

  console.log(dealer);
  console.log(player1);
  console.log("dealer : " + dealerhand);
  console.log("player: " + player1hand);

  while (player1hand > dealerhand) {
    console.log("hello world");
    dealerHit();

    console.log(dealer);
    console.log(player1);
    console.log("dealer : " + dealerhand);
    console.log("player: " + player1hand);
  }

  document.querySelector(".dealer-result").textContent = dealerhand;
  document.querySelector(".player-result").textContent = player1hand;

  setTimeout(() => {
    if (player1hand === dealerhand) {
      document.querySelector(".overall-result").textContent = "DRAW";
      draw += 1;
      player1 = { ...player1, Draw: draw };
      hitButton.disabled = true;
      standButton.disabled = true;
      resetButton.disabled = false;
      startButton.disabled = true;

      document.querySelector(
        ".score-point"
      ).textContent = `[ Player: ${name1} \u00A0\u00A0
        Loss: ${player1.Loss} \u00A0
        Points: ${player1.Points} \u00A0
        Draw: ${player1.Draw} ]`;
    }
    if (dealerhand > 21) {
      document.querySelector(".overall-result").textContent =
        "Dealer Busted, You won!";

      score += 1;
      player1 = { ...player1, Points: score };
      hitButton.disabled = true;
      standButton.disabled = true;
      resetButton.disabled = false;
      startButton.disabled = true;

      document.querySelector(
        ".score-point"
      ).textContent = `[ Player: ${name1} \u00A0\u00A0
        Loss: ${player1.Loss} \u00A0
        Points: ${player1.Points} \u00A0
        Draw: ${player1.Draw} ]`;

      setTimeout(() => {
        yeyAudio.play();
      }, 250);
    }

    if (
      (dealerhand < 21 && dealerhand > player1hand) ||
      (dealerhand === 21 && player1 !== dealerhand)
    ) {
      document.querySelector(".overall-result").textContent = "You Lose";
      loss += 1;
      player1 = { ...player1, Loss: loss };
      hitButton.disabled = true;
      standButton.disabled = true;
      resetButton.disabled = false;
      startButton.disabled = true;

      document.querySelector(
        ".score-point"
      ).textContent = `[ Player: ${name1} \u00A0\u00A0
        Loss: ${player1.Loss} \u00A0
        Points: ${player1.Points} \u00A0
        Draw: ${player1.Draw} ]`;
      sadAudio.play();
    }
  }, 250);

  console.log(parent);
};

//reset app (RESET)
const resetGame = () => {
  plFirst.value = 0;
  plFirst.style.backgroundImage = `url('assets/playing-cards-assets/extra/back.png')`;
  plFirst.style.backgroundColor = "";

  plSecond.value = 0;
  plSecond.style.backgroundImage = `url('assets/playing-cards-assets/extra/back.png')`;
  plSecond.style.backgroundColor = "";

  dlFirst.value = 0;
  dlFirst.style.backgroundImage = `url('assets/playing-cards-assets/extra/back.png')`;
  dlFirst.style.backgroundColor = "";

  dlSecond.value = 0;
  dlSecond.style.backgroundImage = `url('assets/playing-cards-assets/extra/back.png')`;
  dlSecond.style.backgroundColor = "";

  let addElem = document.querySelector(".player-added");
  let dealerAddElem = document.querySelector(".dealer-added");
  //child remover
  while (addElem.firstChild) {
    addElem.removeChild(addElem.lastChild);
  }
  while (dealerAddElem.firstChild) {
    dealerAddElem.removeChild(dealerAddElem.lastChild);
  }

  player1hand = 0;
  dealerhand = 0;
  player1 = {
    ...player1,
    Hand: player1hand,
  };
  dealer = { ...dealer, Hand: dealerhand };
  deckShuffler();

  console.clear();
  console.log(dealer);
  console.log(player1);
  const scorepoint = player1.toString();
  console.log("dealer : " + dealerhand);
  console.log("player: " + player1hand);

  document.querySelector(".dealer-result").textContent = dealerhand;
  document.querySelector(".player-result").textContent = player1hand;

  document.querySelector(".overall-result").textContent = " ";
  document.querySelector(".dlFirstCard").textContent = " ";
  document.querySelector(".dlSecondCard").textContent = " ";
  document.querySelector(".plFirstCard").textContent = " ";
  document.querySelector(".plSecondCard").textContent = " ";

  document.querySelector(
    ".score-point"
  ).textContent = `[ Player: ${name1} \u00A0\u00A0
    Loss: ${player1.Loss} \u00A0
    Points: ${player1.Points} \u00A0
    Draw: ${player1.Draw} ]`;

  const arr_reset = [
    "dlSixthCard",
    "dlFifthCard",
    "dlFourthCard",
    "dlThirdCard",
  ];
  const int_reset = [10, 9, 8, 7];
  dummy_arrDealer = [...arr_reset];
  dummy_intDealer = [...int_reset];
  console.log(dummy_arrDealer);

  const arr_adder = ["plFifthCard", "plFourthCard", "plThirdCard"];
  const int_adder = [6, 5, 4];
  dummy_arr = [...arr_adder];
  dummy_int = [...int_adder];
  console.log(dummy_arr);
};

/** +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */

/** GAME LOGIC */

console.log("dealer : " + dealerhand);
console.log("player: " + player1hand);

//dealer hit logic
let dummy_arrDealer = [
  "dlSixthCard",
  "dlFifthCard",
  "dlFourthCard",
  "dlThirdCard",
];
let dummy_intDealer = [10, 9, 8, 7];
const dealerHit = () => {
  let popped_arr = dummy_arrDealer.pop();
  let popped_int = dummy_intDealer.pop();

  let newDealerCard = document.createElement("div");
  newDealerCard.className = `card ${popped_arr}`;
  // newDealerCard.textContent = `${deck[popped_int].value} of ${deck[popped_int].suit} (weight: ${deck[popped_int].weight})`;
  newDealerCard.value = `${deck[popped_int].weight}`;
  newDealerCard.style.backgroundImage = `url(${deck[popped_int].img})`;
  newDealerCard.style.backgroundColor = "white";

  document.querySelector(".dealer-added").appendChild(newDealerCard);

  console.log(`${deck[popped_int].weight}`);
  dealerhand += deck[popped_int].weight;
  dealer = { ...dealer, Hand: dealerhand };

  //   if (player1hand === dealerhand) {
  //     alert("draw");
  //     draw += 1;
  //     player1 = { ...player1, Draw: draw };
  //   }
};
