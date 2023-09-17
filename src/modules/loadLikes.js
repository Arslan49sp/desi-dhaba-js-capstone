import getLikeItems from './getLikeItems.js';

const loadLikes = async () => {
  const likes = await getLikeItems();

  likes.forEach((element) => {
    const likeCounter = document.querySelector(`#likes-${element.item_id}`);
    likeCounter.innerHTML = `${element.likes} likes,`;
  });
};

export default loadLikes;
