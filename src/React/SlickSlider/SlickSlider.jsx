import React from "react";
import Cards from "./Card/Cards";

const SlickSlider = () => {
  return (
    <section className="py-5 bg-light">
      <div
        className="border-top border-bottom border-2 bg-white"
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}
      >
        <ul id="ul" className="py-5 d-inline-flex">
          {Cards.map((item, index) => (
            <li
              key={index}
              className="px-2"
              style={{ display: "inline-block" }}
            >
              {item.card}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SlickSlider;
