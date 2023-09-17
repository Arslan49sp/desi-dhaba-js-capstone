import { APP_ID } from "./env.js";

const postComments = async (data) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item_id: data.item_id,
        username: data.username,
        comment: data.comment,
      }),
    }
  );
  return response;
};
export default postComments;
