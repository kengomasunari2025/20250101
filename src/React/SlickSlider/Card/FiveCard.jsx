import React from "react";
import CardsImages from "./CardsImages";

const FiveImage = CardsImages.find((image) => image.id === 5);

const FiveCard = () => {
  return (
    <div className="card card-width d-inline-block">
      <div>
        {FiveImage ? (
          <img src={FiveImage.img} alt={`Image ${FiveImage.id}`} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">タイトル5</h5>
        <div>テキスト5</div>
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
export default FiveCard;
