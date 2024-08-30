"use client";

import { FormEvent, useState } from "react";
// CUSTOM DATA
import data from "data/product-details-page";

export default function ProductActions() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(data.sizeList[0].value);
  const [color, setColor] = useState(data.productColors[0].value);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(quantity, color, size);
  };

  return (
    <div className="col-lg-6">
      <div className="post-header mb-5">
        <h2 className="post-title display-5">
          <a href="#" className="link-dark">
            Curology Skincare Set
          </a>
        </h2>

        <p className="price fs-20 mb-2">
          <span className="amount">$55.00</span>
        </p>

        <a href="#" className="link-body ratings-wrapper">
          <span className="ratings four" />
          <span>(3 Reviews)</span>
        </a>
      </div>

      <p className="mb-6">
        Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Duis mollis, est non
        commodo luctus. Nulla vitae elit libero pharetra augue. Donec id elit non mi porta gravida at eget metus.
      </p>

      <form onSubmit={handleFormSubmit}>
        <fieldset className="picker">
          <legend className="h6 fs-16 text-body mb-3">Choose a size</legend>

          {data.sizeList.map(({ value, title }) => (
            <label htmlFor={`size-${value}`} key={title}>
              <input
                type="radio"
                name="sizes"
                value={value}
                id={`size-${value}`}
                checked={value === size}
                onChange={(e) => setSize(e.target.value)}
              />
              <span>{title}</span>
            </label>
          ))}
        </fieldset>

        <fieldset className="picker">
          <legend className="h6 fs-16 text-body mb-3">Choose a color</legend>

          {data.productColors.map(({ id, value }) => (
            <label htmlFor={id} key={id}>
              <input
                id={id}
                type="radio"
                name="colors"
                value={value}
                checked={value === color}
                onChange={(e) => setColor(e.target.value)}
              />
              <span style={{ color: value }}>Yellow</span>
            </label>
          ))}
        </fieldset>

        <div className="row">
          <div className="col-lg-9 d-flex flex-row pt-2">
            <div>
              <div className="form-select-wrapper">
                <select value={quantity} className="form-select" onChange={(e) => setQuantity(+e.currentTarget.value)}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex-grow-1 mx-2">
              <button type="submit" className="btn btn-primary btn-icon btn-icon-start rounded w-100 flex-grow-1">
                <i className="uil uil-shopping-bag" /> Add to Cart
              </button>
            </div>

            <div>
              <button className="btn btn-block btn-red btn-icon rounded px-3 w-100 h-100">
                <i className="uil uil-heart" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
