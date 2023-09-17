import INV_URL from "./env.js";
const getLikeItem = async () => {
  const response = await fetch(INV_URL, {
    method: "GET",
  });
  return response.json();
};
