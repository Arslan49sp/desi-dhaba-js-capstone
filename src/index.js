import "./style.css";
import loadItemCard from "./modules/loadItemsCard.js";
import loadAllCard from "./modules/loadItemData.js";
import { loadLikes } from "./modules/loadLikes.js";

const allItem = await loadAllCard();
loadItemCard(allItem);
await loadLikes();
