import { nanoid } from "nanoid";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = ({ shoppingList }) => {
  return (
    <ul>
      {shoppingList.map((groceryItem) => {
        return (
          <ShoppingListItem
            key={nanoid()}
            itemName={groceryItem.name}
            isNew={groceryItem.isNew}
            // to jest komponet ,który wykorzystuje 2 propsy napisane przez nas i 3-key - ukryty w .map
          />
        );
      })}
    </ul>
  );
};

export default ShoppingList;
