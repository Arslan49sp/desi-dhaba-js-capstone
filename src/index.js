import "./style.css";
import loadItemCard from "./modules/loadItemsCard.js";
import loadAllCard from "./modules/loadItemData.js";

const allItem = await loadAllCard();
loadItemCard(allItem);
