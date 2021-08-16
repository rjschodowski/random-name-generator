import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Silly and Random</h1>
<div class="text-content">
  <h3 class="person"></h3>
</div>
<div>
 <button id="btn">Click to Generate Silliness</button>
</div>
`;

const honorifics = [
  "Mr.",
  "Professor",
  "Mrs.",
  "Miss",
  "Ms.",
  "Lord",
  "Sir",
  "Sire",
  "Lady",
  "Prince",
  "Princess",
  "Dr.",
  "The Most Honourable",
  "Madam",
  "Master",
  "Chancellor",
  "Director",
  "Lieutenant",
  "Sergeant",
  "Constable",
  "Sheriff",
  "Officer",
  "King",
  "Queen",
  "Aunt",
  "Uncle",
  "Cousin"
];

const names = [
  "Cat",
  "Donkey",
  "Kong",
  "Chicken",
  "Cow",
  "Horse",
  "Flea",
  "Tick",
  "Drool",
  "Fanny Farmer",
  "Popcorn",
  "Pepper",
  "Squiggleworm",
  "Randy",
  "Teaparty",
  "Pants",
  "Clogs",
  "Trousers",
  "Willy",
  "Winona",
  "Gilbert",
  "Magnet",
  "Scout",
  "Dan",
  "Fred",
  "Billy",
  "Bubba",
  "Barbie",
  "Wilma",
  "George",
  "Punk",
  "Dude",
  "Dudette",
  "Wart",
  "Pimpleton",
  "Pimple",
  "Remington",
  "Reginald",
  "Pumpkin",
  "Head",
  "Woodpecker",
  "Monkey",
  "Monster",
  "Hamster",
  "Dinosaur",
  "Brain",
  "Neck"
];
const description = [
  "Silly",
  "Wonky",
  "Cheesy",
  "Corny",
  "Goofy",
  "Dorky",
  "Fun",
  "Happy",
  "Purple",
  "Blue",
  "Pink",
  "Clever",
  "Red",
  "Yellow",
  "Orange",
  "Sad",
  "Smelly",
  "Hairy",
  "Pretty",
  "Stinky",
  "Rude",
  "Disgruntled",
  "Angry",
  "Gassy",
  "Lazy",
  "Obnoxious",
  "Freaky",
  "Frightening",
  "Cool",
  "Deliberate",
  "Strong",
  "Flimsy",
  "Floppy",
  "Tough",
  "Jolly",
  "Balding",
  "Bald",
  "Awesome",
  "Dull",
  "Poopy",
  "Tiny",
  "Little",
  "Small",
  "Large"
];
const btn = document.getElementById("btn");
const person = document.querySelector(".person");

btn.addEventListener("click", function () {
  const getRandomName = function () {
    return Math.floor(Math.random() * names.length);
  };

  const getRandomDescription = function () {
    return Math.floor(Math.random() * description.length);
  };

  const getRandomHonorifics = function () {
    return Math.floor(Math.random() * honorifics.length);
  };

  const naming = function () {
    const randomName = getRandomName();
    const randomDescription = getRandomDescription();
    const randomHonorific = getRandomHonorifics();
    console.log(
      honorifics[randomHonorific] +
        " " +
        description[randomDescription] +
        " " +
        names[randomName]
    );
    person.textContent =
      honorifics[randomHonorific] +
      " " +
      description[randomDescription] +
      " " +
      names[randomName];
  };

  naming();
});
