import React from "react";
import CardsImages from "./CardsImages";

const FourImage = CardsImages.find((image) => image.id === 4);

const FourCard = () => {
  return (
    <div className="card card-width d-inline-block">
      <div>
        {FourImage ? (
          <img src={FourImage.img} alt={`Image ${FourImage.id}`} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">タイトル4</h5>
        <div>テキスト4</div>
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
export default FourCard;
