import { useReducer, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MovieContext, ThemeContext } from "./context";
import Pages from "./Pages";
import { CartReducer, initialState } from "./reducers/CartReducer";
export default function App() {
  // const [cartData, setCartData] = useState([]);
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {/* <MovieContext.Provider value={{ cartData, setCartData }}> */}
      <MovieContext.Provider value={{ state, dispatch }}>
        <Pages />
        <ToastContainer />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}
