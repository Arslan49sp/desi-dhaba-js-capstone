import INV_URL from './env.js';

const storeItemLike = async (input) => {
  const response = await fetch(INV_URL, {
    method: 'POST',
    headers: {
      'Content-Type': ' application/json',
    },
    body: JSON.stringify(input),
  });
  return response;
};

export default storeItemLike;
