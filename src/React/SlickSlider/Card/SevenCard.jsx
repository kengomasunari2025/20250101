import React from "react";
import CardsImages from "./CardsImages";

const SevenImage = CardsImages.find((image) => image.id === 7);

const SevenCard = () => {
  return (
    <div className="card card-width d-inline-block">
      <div>
        {SevenImage ? (
          <img src={SevenImage.img} alt={`Image ${SevenImage.id}`} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">タイトル7</h5>
        <div>テキスト7</div>
      </div>
      <div className="text-center py-3">
        <a
          className="hover btn d-inline-block bg-dark outline-dark text-white px-2 py-1"
          href=""
        >
          ボタン
        </a>
      </div>
    </div>
  );
};
export default SevenCard;
