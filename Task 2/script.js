/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const clickMeBtn = document.getElementById('btn__element');
const stateBtn = document.getElementById('btn__state');
console.log(clickMeBtn, stateBtn);

let count = 0;

clickMeBtn.addEventListener('click', () => {
  count++;

  stateBtn.textContent = count;
});
