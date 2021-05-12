import React, { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
const Singleitem = (props) => {
  const { product, onAdd } = props;
  return (
    <article className="menu-item" style={{ marginBottom: 20 }}>
      <img
        className="small"
        src={product.img}
        alt={product.name}
        className="photo"
      />
      <div className="item-info">
        <header>
          <h4>{product.title}</h4>
          <h4 className="price">${product.price}</h4>
        </header>
        <p className="item-text">{product.desc}</p>
        <button class="btn btn-light" onClick={() => onAdd(product)}>
          <FaCartPlus />
        </button>
      </div>
    </article>
  );
};

export default Singleitem;
