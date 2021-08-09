import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Silly and Random</h1>
<h3 class="person"></h3>
<div>
 <button id="btn">Click to Generate Silliness</button>
</div>
`;

const names = [
  "Mr. Cat",
  "Dr. Drool",
  "Fanny Farmer",
  "Princess Popcorn",
  "Mrs. Squiggleworm",
  "Randy",
  "Professor Teaparty"
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
  "Gassy"
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
