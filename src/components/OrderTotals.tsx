import { useMemo, type Dispatch } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import type { OrderActions } from "../reducers/order-reducer";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderActions>;
};

export default function OrderTotals({
  order,
  tip,
  dispatch,
}: OrderTotalsProps) {
  const subtotalAmount = useMemo(() => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [order]);
  const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip]);
  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount],
  );

  // en vez de usar useMemo se puede usar un useCallback
  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Totales y propina</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina: {""}
          <span className="font-bold"> {formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar: {""}
          <span className="font-bold"> {formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold rounded-lg mt-10 disabled:bg-gray-400"
        disabled={totalAmount === 0}
        onClick={() => dispatch({ type: "place-order" })}
      >
        Proceder al pago
      </button>
    </>
  );
}
