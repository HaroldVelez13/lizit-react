import { useReducer } from "react";
import { ProductsContext, reducer } from "../../context/ProductsContext";

type Props = {
  children: JSX.Element;
};
export const TodoContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};
