import { useState } from "react";

import { MovieContext, ThemeContext } from "./context";
import Pages from "./Pages";

export default function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Pages />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}
