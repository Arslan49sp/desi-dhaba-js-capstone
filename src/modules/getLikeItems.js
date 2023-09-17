import INV_URL from './env.js';

const getLikeItems = async () => {
  const response = await fetch(INV_URL, {
    method: 'GET',
  });
  return response.json();
};

export default getLikeItems;