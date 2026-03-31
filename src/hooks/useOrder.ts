import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id); //te dice que si esta o no
    if (itemExist) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id //te dice en donde esta el item que quieres agregar
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem,
      );
      setOrder(updateOrder);
    } else {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder((prev) => [...prev, newItem]);
      //prev es el valor en tiempo real de order
      //si usaria order en vez de prev, podria tener un valor desactualizado de order
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
  };
}
