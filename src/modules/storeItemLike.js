import APPS_ID from "./env.js";
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APPS_ID}/likes/`;
const storeItemLike = async (input) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": " application/json",
    },
    body: JSON.stringify(input),
  });
  return response;
};

export default storeItemLike;
