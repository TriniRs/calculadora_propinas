import type { MenuItem } from "../types";

type MenuItemsProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};
export default function MenuItems({ item, addItem }: MenuItemsProps) {
  return (
    <button
      className="border-2 border-amber-400 hover:bg-stone-700 w-full p-3 text-lg rounded-lg flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p>${item.price}</p>
    </button>
  );
}
