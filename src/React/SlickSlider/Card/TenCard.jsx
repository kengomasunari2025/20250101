import React from "react";
import CardsImages from "./CardsImages";

const TenImage = CardsImages.find((image) => image.id === 10);

const TenCard = () => {
  return (
    <div className="card card-width d-inline-block">
      <div>
        {TenImage ? (
          <img src={TenImage.img} alt={`Image ${TenImage.id}`} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">タイトル10</h5>
        <div>テキスト10</div>
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
export default TenCard;
