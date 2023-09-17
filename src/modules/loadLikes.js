import getLikeItems from "./getLikeItems.js";
import loadAllCard from "./loadItemData.js";

export const loadLikes = async () => {
  const likes = await getLikeItems();
  const allItem = await loadAllCard();

  likes.forEach((element) => {
    const likeCounter = document.querySelector(`#likes-${element.item_id}`);
    likeCounter.innerHTML = `${element.likes} likes,`;
  });
};
