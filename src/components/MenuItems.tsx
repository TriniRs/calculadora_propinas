import type { OrderActions } from "../reducers/order-reducer";
import type { MenuItem } from "../types";
import type { Dispatch } from "react";

type MenuItemsProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};
export default function MenuItems({ item, dispatch }: MenuItemsProps) {
  return (
    <button
      className="border-2 border-amber-400 hover:bg-stone-700 w-full p-3 text-lg rounded-lg flex justify-between"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p>{item.name}</p>
      <p>${item.price}</p>
    </button>
  );
}
