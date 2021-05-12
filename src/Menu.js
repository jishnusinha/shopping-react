import React, { useState, useEffect } from "react";
import Singleitem from "./Singleitem";
const Menu = (props) => {
  const { products, onAdd } = props;
  return (
    <main className="block col-12">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Singleitem
            key={product.id}
            product={product}
            onAdd={onAdd}
          ></Singleitem>
        ))}
      </div>
    </main>
  );
};

export default Menu;
