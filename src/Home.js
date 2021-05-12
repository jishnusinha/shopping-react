import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import Basket from "./Basket";
import { BiCartAlt } from "react-icons/bi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import items from "./data";
import Cart from "./Basket";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function Home() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [cartItems, setCartItems] = useState([]);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  const addtocart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu </h2>
          <h6>{cartItems.length} </h6>
          <Router>
            <Route path="cart" component={Cart} />

            <BiCartAlt
              style={{ color: "red", fontSize: 50, cursor: "pointer" }}
            />
          </Router>

          <div className="underline"></div>
        </div>

        <Categories categories={categories} filterItems={filterItems} />
        <div class="row">
          <div class="col-md-7">
            <Menu products={menuItems} onAdd={addtocart} />
          </div>
          <div class="col-md-5">
            <Basket
              cartItems={cartItems}
              onAdd={addtocart}
              onRemove={onRemove}
            ></Basket>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
