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
  "Sheriff"
];

const names = [
  "Cat",
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
  "Fred"
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
  "Jolly"
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

  const naming = function () {
    const randomName = getRandomName();
    const randomDescription = getRandomDescription();
    console.log(description[randomDescription] + " " + names[randomName]);
    person.textContent =
      description[randomDescription] + " " + names[randomName];
  };

  naming();
});
