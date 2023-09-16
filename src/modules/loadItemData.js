import fecthingItem from './fetchingItem.js';

const loadAllCard = async () => {
  const ids = [
    53011, 53022, 53033, 53044, 53055, 52866, 52977, 52788, 53011, 52933, 52905,
    53056,
  ];

  const array = await Promise.all(ids.map(async (id) => fecthingItem(id)));
  const allItem = array.map((item) => item.meals[0]);
  return allItem;
};

export default loadAllCard;
