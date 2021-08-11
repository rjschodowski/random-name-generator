import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Silly and Random</h1>
<h3 class="person"></h3>
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
  "King",
  "Queen"
];

const names = [
  "Cat",
  "Donkey",
  "Kong",
  "Chicken",
  "Cow",
  "Horse",
  "Drool",
  "Fanny Farmer",
  "Popcorn",
  "Squiggleworm",
  "Randy",
  "Teaparty",
  "Pants",
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
  "Gentle",
  "Deliberate",
  "Strong",
  "Flimsy",
  "Floppy",
  "Willing",
  "Jolly",
  "Balding",
  "Bald",
  "Awesome",
  "Dull",
  "Poopy"
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
