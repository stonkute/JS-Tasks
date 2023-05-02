/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch('cars.json')
  .then((response) => response.json())
  .then((data) => {
    const outputDiv = document.getElementById('output');
    data.forEach((car) => {
      console.log(car);
      const card = document.createElement('div');
      card.classList.add('card');

      const title = document.createElement('h3');
      title.textContent = car.brand;
      card.appendChild(title);

      const models = document.createElement('ul');
      car.models.forEach((model) => {
        const li = document.createElement('li');
        li.textContent = `${car.brand} ${model}`;
        models.appendChild(li);
      });
      card.appendChild(models);

      outputDiv.appendChild(card);
    });
  })
  .catch((error) => console.error(error));
