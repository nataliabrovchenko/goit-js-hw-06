const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`);

for (const element of ingredients) {
  const listEl = document.createElement(`li`);
  listEl.textContent = element;
  listEl.classList.add(`item`);
  list.append(listEl);
}
