import React from "react";
import CardsImages from "./CardsImages";

const TwoImage = CardsImages.find((image) => image.id === 2);

const TwoCard = () => {
  return (
    <div className="card card-width d-inline-block">
      <div>
        {TwoImage ? (
          <img src={TwoImage.img} alt={`Image ${TwoImage.id}`} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">タイトル2</h5>
        <div>テキスト2</div>
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
export default TwoCard;
