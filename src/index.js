import './style.css';
import loadItemCard from './modules/loadItemsCard.js';
import loadAllCard from './modules/loadItemData.js';
import totalItemsCounter from './modules/totalItemsCounter.js';
import loadLikes from './modules/loadLikes.js';
import { loadTotalComments } from './modules/loadTotalComments.js';

const parmodal = document.querySelector('.parmodal');

const ids = [
  53011, 53022, 53033, 53044, 53055, 52866, 52977, 52788, 53011, 52933, 52905,
  53056,
];

const allItem = await loadAllCard();
loadItemCard(allItem);
await loadLikes();
totalItemsCounter(allItem.length);

window.addEventListener('click', (e) => {
  if (e.target === parmodal) {
    parmodal.style.display = 'none';
  }
});

loadTotalComments(ids);
