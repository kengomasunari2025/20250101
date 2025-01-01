import React from "react";
import CardsImages from "./CardsImages";

const ThreeImage = CardsImages.find((image) => image.id === 3);

const ThreeCard = () => {
  return (
    <div className="card card-width d-inline-block">
      <div>
        {ThreeImage ? (
          <img src={ThreeImage.img} alt={`Image ${ThreeImage.id}`} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">タイトル3</h5>
        <div>テキスト3</div>
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
export default ThreeCard;
