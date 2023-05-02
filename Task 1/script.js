/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const form = document.getElementById('form-weight');
const kgInput = document.getElementById('kg-input');
const outputDiv = document.getElementById('output');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const kg = Number(kgInput.value);
  const lb = kg * 2.2046;
  const g = kg / 0.001;
  const oz = kg * 35.274;

  const pounds = document.getElementById('pounds');
  const grams = document.getElementById('grams');
  const ounces = document.getElementById('ounces');

  pounds.textContent = lb.toFixed(2);
  grams.textContent = g.toFixed(2);
  ounces.textContent = oz.toFixed(2);
});
