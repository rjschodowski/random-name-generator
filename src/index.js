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
  "Lietenant",
  "Sargeant",
  "Constable",
  "Sheriff",
  "King",
  "Queen"
];

const names = [
  "Cat",
  "Donkey",
  "Kong",
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
  "Pumpkin"
];
const description = [
  "Silly",
  "Wonky",
  "Goofy",
  "Dorky",
  "Fun",
  "Happy",
  "Sad",
  "Smelly",
  "Hairy",
  "Pretty",
  "Rude",
  "Angry",
  "Gassy",
  "Lazy",
  "Obnoxious",
  "Freaky",
  "Frightening",
  "Gentle",
  "Deliberate",
  "Strong",
  "Flimsy",
  "Floppy",
  "Willing",
  "Jolly",
  "Balding",
  "Bald",
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
