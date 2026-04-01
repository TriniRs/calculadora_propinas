import MenuItems from "./components/MenuItems";
import OrderContens from "./components/OrderContens";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import { initialState, orderReducer } from "./reducers/order-reducer";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <>
      <header className="bg-teal-600 py-5">
        <h1 className="text-center">Calculadora de propinas y consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="mt-10 space-y-3">
            {menuItems.map((item) => (
              <MenuItems key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-500 p-5 rounded-lg space-y-5">
          {state.order.length > 0 ? (
            <>
              <OrderContens order={state.order} dispatch={dispatch} />
              <TipPercentageForm tip={state.tip} dispatch={dispatch} />
              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className="text-center">No hay items en el consumo</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
