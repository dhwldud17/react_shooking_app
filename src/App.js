import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Product_Card from "./components/Product_Card";
import Product_List from "./components/Product_List";
import Header from "./components/Header";
import Card_Input from "./components/Card_Input";
import Card_list from "./components/Card_list";

function App() {
  // const [cartCount, setCartCount] = useState(0);
  return (
    <div className=" pt-10 m-auto" style={{ width: "429px" }}>
      {
        /* <Header cartCount={cartCount}></Header>
      <Product_List onCartCountChange={setCartCount} /> */
        <Card_Input></Card_Input>
      }
    </div>
  );
}

export default App;
